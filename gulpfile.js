var Tasks;
(function (Tasks) {
    "use strict";
    var TaskUtility = (function () {
        function TaskUtility(gulp, ts, tslint, sass, concat) {
            this.gulp = gulp;
            this.ts = ts;
            this.tslint = tslint;
            this.sass = sass;
            this.concat = concat;
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
        TaskUtility.prototype.createTypesScriptLintTask = function () {
            var _this = this;
            /*
                Defining TS linting task
            */
            this.gulp.task("LINT: TypeScript", function () {
                return _this.gulp
                    .src(["Source/**/*.ts"])
                    .pipe(_this.tslint({
                    formatter: "verbose"
                }))
                    .pipe(_this.tslint.report());
            });
        };
        TaskUtility.prototype.createTypeScriptCompileTask = function () {
            var _this = this;
            /*
                Defining TS compiling task
            */
            var tsProject = this.ts.createProject("tsconfig.json");
            this.gulp.task("TASK: TypeScript", ["LINT: TypeScript"], function () {
                return _this.gulp.src([
                    "Source/**/*.ts"
                ], {
                    base: "."
                })
                    .pipe(tsProject())
                    .pipe(_this.gulp.dest("."));
            });
        };
        TaskUtility.prototype.createConcatLibs = function () {
            var _this = this;
            /*
                Sync concating of app logic
            */
            this.gulp.task("TASK: BUNDLE FEATURES", ["TASK: TypeScript"], function () {
                var featuresFolder = "Source/Features/", librariesFolder = "Source/Libraries/";
                return _this.gulp
                    .src([
                    librariesFolder + "**/*.js",
                    featuresFolder + "**/_*.js",
                    "Source/bootstrap.js"
                ])
                    .pipe(_this.concat("Temp/app.js"))
                    .pipe(_this.gulp.dest("."));
            });
        };
        TaskUtility.prototype.createSassCompileTask = function () {
            var _this = this;
            this.gulp.task("TASK: Sass", function () {
                return _this.gulp
                    .src([
                    "Source/style.scss"
                ])
                    .pipe(_this.sass())
                    .pipe(_this.gulp.dest("Temp"));
            });
        };
        TaskUtility.prototype.setupWatcher = function () {
            var _this = this;
            this.gulp.task("WATCHER", function () {
                // Sass files
                _this.gulp.watch(["Source/**/*.scss"], { cwd: "." }, ["TASK: Sass"]);
                // Typescript files
                _this.gulp.watch(["Source/**/*.ts"], { cwd: "." }, function () {
                    _this.gulp.run("TASK: BUNDLE FEATURES");
                });
            });
        };
        TaskUtility.prototype.setupTaskChain = function () {
            this.gulp.task("default", [
                "TASK: BUNDLE FEATURES",
                "TASK: Sass",
                "WATCHER"
            ]);
        };
        return TaskUtility;
    }());
    Tasks.TaskUtility = TaskUtility;
})(Tasks || (Tasks = {}));
// Loading npm deps
var gulp = require("gulp"), ts = require("gulp-typescript"), tslint = require("gulp-tslint"), concat = require("gulp-concat"), sass = require("gulp-sass");
var TaskUtility = new Tasks.TaskUtility(gulp, ts, tslint, sass, concat);
