declare let require: any;

namespace Tasks {
	"use strict";

	interface ITaskUtility {
		createTypesScriptLintTask: () => void;
		createTypeScriptCompileTask: () => void;
		createConcatLibs: () => void;
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
			private concat
		) {
			// Work horses
			this.createTypesScriptLintTask();
			this.createTypeScriptCompileTask();

			this.createConcatLibs();

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
			this.gulp.task("TASK: BUNDLE FEATURES", ["TASK: TypeScript"], () => {
				let featuresFolder = "Source/Features/",
					librariesFolder = "Source/Libraries/";

				return this.gulp
					.src([
						`${librariesFolder}**/*.js`,
						`${featuresFolder}**/_*.js`,
						`Source/bootstrap.js`
					])
					.pipe(this.concat("Temp/app.js"))
					.pipe(this.gulp.dest("."));
			});
		}

		public createSassCompileTask() {
			this.gulp.task("TASK: Sass", () => {
				return this.gulp
					.src([
						"Source/style.scss"
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
					["Source/**/*.ts"],
					{ cwd: "." },
					() => {
						this.gulp.run("TASK: BUNDLE FEATURES");
					}
				);
			});
		}
		public setupTaskChain() {
			this.gulp.task("default", [
				"TASK: BUNDLE FEATURES",
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
	sass = require("gulp-sass");

const TaskUtility = new Tasks.TaskUtility(gulp, ts, tslint, sass, concat);