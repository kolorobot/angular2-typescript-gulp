var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var tsProject = tsc.createProject("tsconfig.json");

gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

gulp.task("compile", () => {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(tsc(tsProject));
    return tsResult.js.pipe(gulp.dest("build"));
});

gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"))
});

gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'angular2/bundles/angular2-polyfills.js',
            'systemjs/dist/system.src.js',
            'rxjs/bundles/Rx.js',
            'angular2/bundles/angular2.dev.js',
            'angular2/bundles/router.dev.js'
        ], {cwd: "node_modules/**"}) /* Glog required here. */
        .pipe(gulp.dest("build/lib"));
});

gulp.task("build", ['compile', 'resources', 'libs'], () => {
    console.log("Building the project ...")
});