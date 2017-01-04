//Gulp Tasks Required

var gulp          = require('gulp');
var sass          = require('gulp-sass');
var browserSync   = require('browser-sync').create();
var pug           = require('gulp-pug');
var childProcess  = require('child_process');
var prefixer      = require('gulp-autoprefixer');

//Define Jekyll
var jekyll = 'jekyll';



//General Framework:
//get source files   gulp.src
//send through gulp plugin
//output the files    gulp.dest



//------  Gulp Tasks ----------

//Preprocessing SASS, compiling files into CSS
gulp.task('sass', function(){
  return gulp.src('assets/css/main.scss')
    .pipe(sass())
    .pipe(prefixer('last 3 versions'))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('assets/css'))

})

//Preprocessing Pug, compiling files into html

gulp.task('pug', function () {

  return gulp.src('_pugfiles/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('_includes'))

})

//--- Jekyll ----

//Build the Jekyll Site

gulp.task('jekyll-build', function(done){
  return childProcess.spawn(jekyll , ['build'], {stdio: 'inherit'})
    .on('close', done);
})

//Rebuild Jekyll & Reload Website using browserSync

gulp.task('jekyll-rebuild', ['jekyll-build'], function(){
  browserSync.reload();
})

//Browser-Sync
gulp.task('browserSync', ['sass', 'jekyll-build'], function(){
  browserSync.init({
    server:{
      baseDir: '_site'
    },
  })
})




//Watching For Files

gulp.task('watch', function(){
  gulp.watch('assets/css/**', ['sass']);
  gulp.watch(['index.html', '_includes/*.html'], ['jekyll-rebuild']);
  gulp.watch('_pugfiles/*.pug', ['pug']);

})

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browserSync', 'watch']);
