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
            app: {
                options: {
                    'config': './<%= swabstack.app %>/config.rb',
                    'cssDir': './<%= swabstack.app %>/assets/css',
                    'sassDir': './<%= swabstack.app %>/assets/scss',
                    'output-style': 'expanded'
                }
            },
            dist: {
                options: {
                    config: './<%= swabstack.app %>/config.rb',  // css_dir = 'dev/css'
                    'sassDir': './<%= swabstack.app %>/assets/scss',
                    'cssDir': './<%= swabstack.dist %>/css',
                    'output-style': 'compressed'

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
            templates: {
                files: ['<%= swabstack.app %>}/assets/**/templates/{,**/}*.tpl'],
                tasks: ['copy:templates']
            },
            vendorjs: {
                files: ['<%= swabstack.app %>/assets/js/**/*.js'],
                tasks: ['copy:vendorjs']
            },

            livereload: {
                files: [

                    '<%= swabstack.app %>/index.html',
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
        targethtml: {
            app: {
                files: {
                    '<%= swabstack.app %>/index.html': '<%= swabstack.app %>/index-template.html'
                }
            },
            dist: {
                files: {
                    './<%= swabstack.dist %>/index.html': '<%= swabstack.app %>/index-template.html'
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
            },
            vendorjs: {
                files: [{
                    expand: true,
                    cwd: '<%= swabstack.app %>/assets/coffee/',
                    src: ['**/*.js'],
                    dest: '<%= swabstack.app %>/assets/js/'
                }]
            },
            media: {
                files: [{
                    expand: true,
                    cwd: '<%= swabstack.app %>/assets/',
                    src: ['img/*','css/**/*.*','js/vendor/modernizr.js'],
                    dest: '<%= swabstack.dist %>/'
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
        },
        requirejs: {
          compile: {
            options: {
              baseUrl: '<%= swabstack.app %>/assets/js',
              mainConfigFile: '<%= swabstack.app %>/assets/js/require_main.js',
              name: 'vendor/almond', // assumes a production build using almond
              out: './<%= swabstack.dist %>/require_main_built.js',
              findNestedDependencies: true,
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-docco');
    grunt.loadNpmTasks('grunt-targethtml');

grunt.registerTask('default', [
    'copy:vendorjs',
    'copy:templates', // when starting, copy any templates that may have been added
    'compass:app',
    'coffee', //compile any coffescript files that may have changed
    'targethtml:app',
    'connect:testserver',
    'express:dev',
    'watch'
    ]);

grunt.registerTask('build', [
    'targethtml:dist',
    'copy:media',
    'compass:dist',
    'copy:vendorjs',
    'copy:templates', // when starting, copy any templates that may have been added
    'coffee', //compile any coffescript files that may have changed
    'requirejs'
    ]);

};
