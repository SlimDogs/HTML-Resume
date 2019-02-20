/// <reference types="node" />


interface ITaskUtility {
	createTypesScriptLintTask: () => void;
	createTypeScriptCompileTask: () => void;
	createConcatLibs: () => void;
	createIndexGenerationTask: () => void;
	createSassCompileTask: () => void;
	setupWatcher: () => void;
	setupTaskChain: () => void;
}

export class TaskUtility implements ITaskUtility {
	constructor(
		private gulp,
		private ts,
		private tslint,
		private sass,
		private concat,
		private fileSystem
	) {
		// Work horses
		this.createTypesScriptLintTask();
		this.createTypeScriptCompileTask();

		this.createConcatLibs();
		this.createIndexGenerationTask();

		this.createSassCompileTask();

		// WATCHER
		this.setupWatcher();

		// Task chain
		this.setupTaskChain();
	}

	public createTypesScriptLintTask() {
		/*
			Defining TS linting task
		*/
		this.gulp.task("LINT: TypeScript", () => {
			return this.gulp
				.src(["src/**/*.ts"])
				.pipe(this.tslint({ formatter: "verbose" }))
				.pipe(this.tslint.report());
		});
	}
	public createTypeScriptCompileTask() {
		/*
			Defining TS compiling task
		*/
		let tsProject = this.ts.createProject("tsconfig.json");
		this.gulp.task("TASK: TypeScript", ["LINT: TypeScript"], () => {
			return this.gulp.src(
				["src/**/*.ts"],
				{ base: "." }
			)
				.pipe(tsProject())
				.pipe(this.gulp.dest("."));
		});
	}

	public createConcatLibs() {
		/*
			Sync concating of app logic
		*/
		let featuresFolder = "src/Features/",
			sectionsFolder = "src/Sections/";

		this.gulp.task("TASK: BUNDLE FEATURES", ["TASK: TypeScript", "TASK: SASS", "TASK: BUNDLE HTML"], () => {
			return this.gulp
				.src([
					`${featuresFolder}**/_*.js`,
					`src/bootstrap.js`
				])
				.pipe(this.concat(".tmp/app.js"))
				.pipe(this.gulp.dest("."));
		});

		this.gulp.task("TASK: BUNDLE HTML", () => {
			return this.gulp
				.src([
					`${featuresFolder}/jsDetect/_*.html`,
					`${sectionsFolder}/Header/_*.html`,
					`${sectionsFolder}/Header/_*.html`,
					`${featuresFolder}/availabilityStatus/_*.html`,
					`${sectionsFolder}/Summary/_*.html`,
					`${sectionsFolder}/Employment/_*.html`,
					`${sectionsFolder}/Education/_*.html`,
					`${sectionsFolder}/KeySkills/_*.html`
				])
				.pipe(this.concat(".tmp/_html.html"))
				.pipe(this.gulp.dest("."));
		});
	}

	public createIndexGenerationTask() {
		this.gulp.task("TASK: GENERATE INDEX", ["TASK: BUNDLE FEATURES"], (done: () => void) => {
			let replacements = {
				html: null,
				js: null,
				css: null,
				htmlBody: null
			};
			// Reading index file
			this.fileSystem.readFile("src/_index.html", "utf8", (error, htmlContent) => {
				if (error) {
					console.log(error);
					return;
				}
				replacements.html = htmlContent;

				// Reading css Javascript
				this.fileSystem.readFile(".tmp/index.css", "utf8", (error, cssContent) => {
					if (error) {
						console.log(error);
						return;
					}
					replacements.css = cssContent;

					// Reading css Javascript
					this.fileSystem.readFile(".tmp/_html.html", "utf8", (error, htmlBodyContent) => {
						if (error) {
							console.log(error);
							return;
						}
						replacements.htmlBody = htmlBodyContent;

						// Reading Raw Javascript
						this.fileSystem.readFile(".tmp/app.js", "utf8", (error, jsContent) => {
							if (error) {
								console.log(error);
								return;
							}
							replacements.js = jsContent;
							replacements.html = replacements.html.replace("/*<css>*/", replacements.css);
							replacements.html = replacements.html.replace("/*<js>*/", replacements.js);
							replacements.html = replacements.html.replace("<!--html-->", replacements.htmlBody);

							// Creating file
							this.fileSystem.writeFile("dist/index.html", replacements.html, () => {
								done();
							});
						});
					});
				});
			});
		});
	}

	public createSassCompileTask() {
		this.gulp.task("TASK: SASS", () => {
			return this.gulp
				.src(["src/index.scss"])
				.pipe(this.sass({ outputStyle: "compressed" }))
				.pipe(this.gulp.dest(".tmp"));
		});
	}
	public setupWatcher() {
		this.gulp.task("WATCHER", () => {
			// Typescript files
			this.gulp.watch(
				["src/**/*.ts", "src/**/_*.html", "src/**/*.scss"],
				{ cwd: "." },
				() => {
					this.gulp.run("TASK: GENERATE INDEX");
				}
			);
		});
	}
	public setupTaskChain() {
		this.gulp.task("default", [
			"TASK: GENERATE INDEX",
			"WATCHER"
		]);
		this.gulp.task("build", [
			"TASK: GENERATE INDEX"
		]);
	}

}

// Loading npm deps
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tslint = require("gulp-tslint");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const fileSystem = require("fs");

const taskUtility = new TaskUtility(
	gulp,
	ts,
	tslint,
	sass,
	concat,
	fileSystem
);