/// <reference types="node" />

namespace Tasks {
	"use strict";

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
					.src(["Source/**/*.ts"])
					.pipe(this.tslint({
						formatter: "verbose"
					}))
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
					[
						"Source/**/*.ts"
					],
					{
						base: "."
					}
				)
					.pipe(tsProject())
					.pipe(this.gulp.dest("."));
			});
		}

		public createConcatLibs() {
			/*
				Sync concating of app logic
			*/
			let featuresFolder = "Source/Features/",
				librariesFolder = "Source/Libraries/";

			this.gulp.task("TASK: BUNDLE FEATURES", ["TASK: TypeScript", "TASK: BUNDLE HTML"], () => {


				return this.gulp
					.src([
						`${librariesFolder}**/*.js`,
						`${featuresFolder}**/_*.js`,
						`Source/bootstrap.js`
					])
					.pipe(this.concat("Temp/app.js"))
					.pipe(this.gulp.dest("."));
			});

			this.gulp.task("TASK: BUNDLE HTML", () => {
				return this.gulp
					.src([
						`${featuresFolder}**/_*.html`
					])
					.pipe(this.concat("Temp/_html.html"))
					.pipe(this.gulp.dest("."));
			});
		}

		public createIndexGenerationTask() {
			this.gulp.task("TASK: GENERATE INDEX", ["TASK: BUNDLE FEATURES"], (done: () => void) => {
				let replacements = {
					html: null,
					js: null,
					css: null
				};
				// Reading index file
				this.fileSystem.readFile("Source/_index.html", "utf8", (error, htmlContent) => {
					replacements.html = htmlContent;
				});
				// Reading css Javascript
				this.fileSystem.readFile("Temp/index.css", "utf8", (error, cssContent) => {
					replacements.css = cssContent;

					// Reading Raw Javascript
					this.fileSystem.readFile("Temp/app.js", "utf8", (error, jsContent) => {
						replacements.js = jsContent;
						replacements.html = replacements.html.replace("/*<css>*/", replacements.css);
						replacements.html = replacements.html.replace("/*<js>*/", replacements.js);

						// Creating file
						this.fileSystem.writeFile("index.html", replacements.html, () => {
							done();
						});
					});
				});
			});
		}

		public createSassCompileTask() {
			this.gulp.task("TASK: Sass", () => {
				return this.gulp
					.src([
						"Source/index.scss"
					])
					.pipe(this.sass())
					.pipe(this.gulp.dest("Temp"));
			});
		}
		public setupWatcher() {
			this.gulp.task("WATCHER", () => {
				// Sass files
				this.gulp.watch(
					["Source/**/*.scss"],
					{ cwd: "." },
					["TASK: Sass"]
				);
				// Typescript files
				this.gulp.watch(
					["Source/**/*.ts", "Source/**/_*.html"],
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
				"TASK: Sass",
				"WATCHER"
			]);
		}

	}

}

// Loading npm deps
let gulp = require("gulp"),
	ts = require("gulp-typescript"),
	tslint = require("gulp-tslint"),
	concat = require("gulp-concat"),
	sass = require("gulp-sass"),
	fileSystem = require("fs");

const TaskUtility = new Tasks.TaskUtility(
	gulp,
	ts,
	tslint,
	sass,
	concat,
	fileSystem
);