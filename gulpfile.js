/// <reference types="node" />
var Tasks;
(function (Tasks) {
    "use strict";
    var TaskUtility = /** @class */ (function () {
        function TaskUtility(gulp, ts, tslint, sass, concat, fileSystem) {
            this.gulp = gulp;
            this.ts = ts;
            this.tslint = tslint;
            this.sass = sass;
            this.concat = concat;
            this.fileSystem = fileSystem;
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
            var featuresFolder = "Source/Features/", sectionsFolder = "Source/Sections/", librariesFolder = "Source/Libraries/";
            this.gulp.task("TASK: BUNDLE FEATURES", ["TASK: TypeScript", "TASK: SASS", "TASK: BUNDLE HTML"], function () {
                return _this.gulp
                    .src([
                    librariesFolder + "**/*.js",
                    featuresFolder + "**/_*.js",
                    "Source/bootstrap.js"
                ])
                    .pipe(_this.concat("Temp/app.js"))
                    .pipe(_this.gulp.dest("."));
            });
            this.gulp.task("TASK: BUNDLE HTML", function () {
                return _this.gulp
                    .src([
                    featuresFolder + "/jsDetect/_*.html",
                    sectionsFolder + "/Header/_*.html",
                    sectionsFolder + "/Header/_*.html",
                    featuresFolder + "/availabilityStatus/_*.html",
                    sectionsFolder + "/Summary/_*.html",
                    sectionsFolder + "/Employment/_*.html",
                    sectionsFolder + "/Education/_*.html",
                    sectionsFolder + "/KeySkills/_*.html"
                ])
                    .pipe(_this.concat("Temp/_html.html"))
                    .pipe(_this.gulp.dest("."));
            });
        };
        TaskUtility.prototype.createIndexGenerationTask = function () {
            var _this = this;
            this.gulp.task("TASK: GENERATE INDEX", ["TASK: BUNDLE FEATURES"], function (done) {
                var replacements = {
                    html: null,
                    js: null,
                    css: null,
                    htmlBody: null
                };
                // Reading index file
                _this.fileSystem.readFile("Source/_index.html", "utf8", function (error, htmlContent) {
                    replacements.html = htmlContent;
                    // Reading css Javascript
                    _this.fileSystem.readFile("Temp/index.css", "utf8", function (error, cssContent) {
                        replacements.css = cssContent;
                        // Reading css Javascript
                        _this.fileSystem.readFile("Temp/_html.html", "utf8", function (error, htmlBodyContent) {
                            replacements.htmlBody = htmlBodyContent;
                            // Reading Raw Javascript
                            _this.fileSystem.readFile("Temp/app.js", "utf8", function (error, jsContent) {
                                replacements.js = jsContent;
                                replacements.html = replacements.html.replace("/*<css>*/", replacements.css);
                                replacements.html = replacements.html.replace("/*<js>*/", replacements.js);
                                replacements.html = replacements.html.replace("<!--html-->", replacements.htmlBody);
                                // Creating file
                                _this.fileSystem.writeFile("index.html", replacements.html, function () {
                                    done();
                                });
                            });
                        });
                    });
                });
            });
        };
        TaskUtility.prototype.createSassCompileTask = function () {
            var _this = this;
            this.gulp.task("TASK: SASS", function () {
                return _this.gulp
                    .src([
                    "Source/index.scss"
                ])
                    .pipe(_this.sass({ outputStyle: "compressed" }))
                    .pipe(_this.gulp.dest("Temp"));
            });
        };
        TaskUtility.prototype.setupWatcher = function () {
            var _this = this;
            this.gulp.task("WATCHER", function () {
                // Typescript files
                _this.gulp.watch(["Source/**/*.ts", "Source/**/_*.html", "Source/**/*.scss"], { cwd: "." }, function () {
                    _this.gulp.run("TASK: GENERATE INDEX");
                });
            });
        };
        TaskUtility.prototype.setupTaskChain = function () {
            this.gulp.task("default", [
                "TASK: GENERATE INDEX",
                "WATCHER"
            ]);
            this.gulp.task("build", [
                "TASK: GENERATE INDEX"
            ]);
        };
        return TaskUtility;
    }());
    Tasks.TaskUtility = TaskUtility;
})(Tasks || (Tasks = {}));
// Loading npm deps
var gulp = require("gulp"), ts = require("gulp-typescript"), tslint = require("gulp-tslint"), concat = require("gulp-concat"), sass = require("gulp-sass"), fileSystem = require("fs");
var TaskUtility = new Tasks.TaskUtility(gulp, ts, tslint, sass, concat, fileSystem);
