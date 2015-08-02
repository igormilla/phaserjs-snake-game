module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        esnext: true,
        browser: true
      },
      all: ['Gruntfile.js', 'src/js/*.js', 'test/**/*.js']
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "src",
          optimize: 'uglify',
          findNestedDependencies: true,
          mainConfigFile: "src/js/.require.config.js",
          out: "src/dist/bundle.js",
          name: "js/main",
          wrap: {
            start: "// jshint ignore: start \n",
            end: ""
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('dist', ['jshint', 'requirejs']);

};
