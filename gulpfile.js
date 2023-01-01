var nunjucksRender = require('gulp-nunjucks-render');
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var ap = require('gulp-autoprefixer');
var sm = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function redirect(done){
  gulp.src('./k/assets/js/scss/style.scss')
  .pipe(sm.init())
  .pipe(sass({
    errorLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .on('error', console.error.bind(console))
  .pipe(ap({
    browsers:['last 3 versions'],
    cascade: false
  }))
  .pipe(rename('main.css'))
  .pipe(sm.write())
  .pipe(gulp.dest('./render'))
  .pipe(browserSync.stream());
  done();
}

function nunjuck(done){
  // Gets .html and .nunjucks files in pages
  return gulp.src('pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['modules']
    }))
  // output files in app folder
  .pipe(gulp.dest('render'))
}

function sync(done){
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 2000
  });
  done();
}

function watcherSCSS(){
  gulp.watch("./k/assets/scss/*.scss", redirect);

}

function watcherNun(){
  gulp.watch("./pages/**/*.+(html|nunjucks)", nunjuck);
}

gulp.task('default', gulp.parallel(sync, watcherSCSS, watcherNun));
gulp.task(sync);
