var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

// styles task
gulp.task('styles', function() {
	return gulp.src('css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(gulp.dest('css/'))
		// reload the browser CSS after every change
    	.pipe(reload({stream:true}));
});

// reload task
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// prepare browsersync
gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css', 'js/*.js'], {
        // for a static server use this
        server: {
            baseDir: './'
        }
    });
});

// watch scss and html files & do different things with each
gulp.task('default', ['styles', 'browser-sync'], function () {
    // watch scss files & run the sass task on change
    gulp.watch(['css/*.scss', 'css/**/*.scss'], ['styles'])
    // watch html files & run bs-reload task on change
    gulp.watch(['*.html'], ['bs-reload']);
});
