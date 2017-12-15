var gulp = require('gulp'),
watch = require("gulp-watch");

gulp.task("default", function() {
  console.log("a new task")
});

gulp.task("html", function() {
  console.log("html")
});

gulp.task("styles", function(){
  console.log("sass or postCSS");
})

gulp.task("watch", function() {
  gulp.watch("./app/index.html", function () {
    gulp.start("html");
  })

  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("styles");
  });
});
