var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function (grunt) {
    'use strict';
    var swabstackConfig = {
        app: 'app',
        dist: 'dist',
        test: 'app/test'
    };
    grunt.initConfig({
        swabstack: swabstackConfig,
        compass: {
            dist: {
                options: {
                    config: '<%= swabstack.app %>/config.rb',
                    basePath: '<%= swabstack.app %>/',
                    cssDir: '<%= swabstack.app %>/assets/css'
                }
            }
        },
        watch: {
            compass: {
                files: ['<%= swabstack.app %>/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            coffee: {
                files: ['<%= swabstack.app %>/assets/coffee/{,**/}*.coffee'],
                tasks: ['coffee']
            },

            livereload: {
                files: [

                    '<%= swabstack.app %>/*.html',
                    '{.tmp,<%= swabstack.app %>}/assets/css/{,**/}*.css',
                    '{.tmp,<%= swabstack.app %>}/assets/js/{,**/}*.js',
                    '{.tmp,<%= swabstack.app %>}/assets/**/templates/{,**/}*.tpl',
                ],

                options: {
                    livereload: true
                }
            }
        },

        // express app
        express: {
            options: {
                // Override defaults here
                port: '9000'
            },
            dev: {
                options: {
                    script: 'server/app.js'
                }
            },
            prod: {
                options: {
                    script: 'server/app.js'
                }
            },
            test: {
                options: {
                    script: 'server/app.js'
                }
            }
        },
        // connect server
        connect: {
            testserver: {
                options: {
                    port: 1234,
                    base: '.'
                }
            }
        },
        // coffeescript
        coffee: {
            glob_to_multiple: {
                expand: true,
                flatten: false,
                bare: true,
                cwd: '<%= swabstack.app %>/assets/coffee/',
                src: ['**/*.coffee','*.coffee'],
                dest: '<%= swabstack.app %>/assets/js/',
                ext: '.js'
            },
            jasmine_tests: {
                expand: true,
                flatten: false,
                bare: true,
                cwd: '<%= swabstack.app %>/test/',
                src: ['spec/SwabcastSpec.coffee', 'SpecRunner.coffee'],
                dest: '<%= swabstack.app %>/test/',
                ext: '.js'
            }
        },
        //copy templates
        copy: {
            templates: {
                files: [{
                    expand: true,
                    cwd: '<%= swabstack.app %>/assets/coffee/',
                    src: ['**/*.{tpl,md}'],
                    dest: '<%= swabstack.app %>/assets/js/'
                }]
            }
        },
        docco: {
          debug: {
            src: ['<%= swabstack.app %>/assets/js'],
            options: {
              output: 'docs/'
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-docco');

grunt.registerTask('default', [
    'copy', // when starting, copy any templates that may have been added
    'coffee', //compile any coffescript files that may have changed
    'connect:testserver',
    'express:dev',
    'watch'
    ]);

};
