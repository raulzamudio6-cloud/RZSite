module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        files: [
          { expand: true, src: ['index.html', 'styles.css', 'script.js'], dest: 'dist/' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy']);
};
