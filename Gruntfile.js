module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src: 'app/main.js',
        dest: 'app/public/js/output.js'
      }
    },

    jshint: {
      options: {
        scripturl: true,
        eqnull: true
      },

      // TODO: how to jshint the files with JSX?
      app: [ 'app/*.js' ],
      other: [ 'Gruntfile.js' ]
    },

  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [ 'jshint', 'browserify' ]);
};