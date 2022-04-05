const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename")

gulp.task('gulpEjs', function() {
    return gulp
        .src([ "./src/html/*.html", "!" + "./src/html/include/*" ])
        .pipe(ejs({title: "gulp-ejs"}))
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./dist/html'));
});


gulp.task( "default", gulp.parallel("gulpEjs") );
