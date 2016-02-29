'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify');

var babelify = require('babelify');

var source = require('vinyl-source-stream');
var concat = require('gulp-concat');


var config = {
  port: process.env.PORT || 3030,
  devBaseUrl: process.env.IP || 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/js/**/*.js',
    sass: './src/styles/**/*.scss',
    mainSass: './src/styles/app.scss',
    mainJS: './src/index.js',
    public: './public',
  }
};

//Start local dev server
gulp.task('connect', function(){
  connect.server({
    root: ['public'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true,
  });
});

gulp.task('open', ['connect'], function(){
  gulp.src('./public/index.html')
  .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/',}));
});


gulp.task('browserify', function(){
  browserify(config.paths.mainJS)
    .transform(babelify, {presets: ['es2015','react']})
    .bundle()
    .on('error', function(err){
      gutil.log(err.message + '\r\n' + err.codeFrame);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.public))
    .pipe(connect.reload());
});

// TODO: minify
gulp.task('mainSass',function(){
  gulp.src(config.paths.mainSass)
    .pipe(sass({
      includePaths: [config.paths.mainSass]
    }))
    // .pipe(sass().on('error',sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.paths.public));
  });

gulp.task('html', function(){
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.public))
    .pipe(connect.reload());
});

gulp.task('sass', function(){
  gulp.src(config.paths.sass)
    .pipe(connect.reload());
});

gulp.task('js', function(){
  gulp.src(config.paths.js)
    .pipe(connect.reload());
});

// TODO: Configure .eslintrc correctly
	// OR look into jslint
// gulp.task('lint', function(){
//   return gulp.src(config.paths.js)
//           .pipe(lint({config: '.eslintrc'}))
//           .pipe(lint.format());
// });


gulp.task('watch', function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.sass,['sass']);
});

// gulp.task('default', ['browserify', 'sass', 'html', 'lint']);
// gulp.task('serve', ['browserify', 'sass', 'html', 'css', 'lint', 'open', 'watch']);

gulp.task('default', ['html']);
gulp.task('serve',   ['browserify', 'mainSass', 'html', 'sass', 'watch']);
