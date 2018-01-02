var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');
var app = {
	scrPath: 'script',
	devPath: 'public/',
	prdPath: 'public/'
};



gulp.task('less', function() {
	gulp.src(app.scrPath + 'stylesheets/index.less')
		.pipe($.plumber())
		.pipe($.less())
		.pipe(gulp.dest(app.devPath + 'css'))
		.pipe(gulp.dest(app.prdPath + 'css'))
		.pipe($.connect.reload());
});


//js

gulp.task('js', function() {
	gulp.src(app.scrPath + '/**/*.js')
		.pipe($.plumber())
		.pipe($.concat('index.js'))
		.pipe(gulp.dest(app.devPath  + 'javascripts'));
});


gulp.task('build', ['js']);


//clear

gulp.task('clear', function() {
	gulp.src([app.devPath, app.prdPath])
		.pipe($.clean());

});


//serve

gulp.task('serve', ['build'], function() {
	/*$.connect.server({
		root: [app.devPath],
		livereload: true
	});*/

	gulp.watch(app.scrPath + '/**/*.js' , ['js']);
});