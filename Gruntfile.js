var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function (grunt) {
    'use strict';
    var swabstackConfig = {
        app: 'app',
        dist: 'dist',
        test: 'test'
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
            }
        },
        watch: {
            compass: {
                files: ['<%= swabstack.app %>/scss/*.{scss,sass}'],
                tasks: ['compass:app']
            },
            coffee: {
                files: ['<%= swabstack.app %>/assets/coffee/{,**/}*.coffee'],
                tasks: ['coffee:glob_to_multiple']
            },
            tests: {
                files: ['<%= swabstack.test %>/coffee/*.coffee'],
                tasks: ['coffee:testcoffee']
            },
            templates: {
                files: ['<%= swabstack.app %>}/assets/**/templates/{,**/}*.tpl'],
                tasks: ['copy:templates']
            },
            vendorjs: {
                files: ['<%= swabstack.app %>/assets/js/**/*.js'],
                tasks: ['copy:vendorjs']
            },
            indextemplate: {
                files: ['<%= swabstack.app %>/index.html'],
                tasks: ['targethtml:app']
            },
            livereload: {
                files: [

                    '<%= swabstack.app %>/index.html',
                    '{.tmp,<%= swabstack.app %>}/assets/css/{,**/}*.css',
                    '{.tmp,<%= swabstack.app %>}/assets/js/{,**/}*.js',
                    '{.tmp,<%= swabstack.app %>}/assets/**/templates/{,**/}*.tpl'
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
            dist: {
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
                    '<%= swabstack.app %>/index.html': '<%= swabstack.app %>/swabcast.html'
                }
            },
            dist: {
                files: {
                    './<%= swabstack.dist %>/index.html': '<%= swabstack.app %>/swabcast.html'
                }
            }
        },

        // connect server
        connect: {
            testserver: {
                options: {
                    port: 1234,
                    base: './'
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
            testcoffee: {
                expand: true,
                flatten: true,
                bare: true,
                cwd: './',
                src: ['test/coffee/*.coffee'],
                dest: 'test/spec/',
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
            docs: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['docs/***'],
                    dest: '<%= swabstack.dist %>/'
                }]
            },
            assets: {
                files: [{
                    expand: true,
                    cwd: '<%= swabstack.app %>/assets/',
                    src: ['mp3/**.*', 'img/**.*'],
                    dest: '<%= swabstack.dist %>/assets/'
                }]
            },
            components: {
                files: [{
                    expand: true,
                    cwd: '<%= swabstack.app %>/assets/',
                    src: ['js/vendor/modernizr.js', 'css/foundation-icon*.*', 'svgs/**.*', 'css/images/**.*'],
                    dest: '<%= swabstack.dist %>/'
                }]
            },
            requireBuilt: { //since having issues getting nested dependancys working with grunt task
                // first from app folder, run 'node r.js -o assets/js/build.js'
                files: [{
                    src: ['./<%= swabstack.app %>/assets/js/require_main_built.js'],
                    dest: './<%= swabstack.dist %>/require_main_built.js'
                }]
            }
        },
        cssmin: {
          combine: {
            options: {
              banner: '/* Like a ninja */'
            },
            files: {
              '<%= swabstack.dist %>/css/combined.min.css': ['./<%= swabstack.app %>/assets/css/app.css', './<%= swabstack.app %>/assets/css/jquery-ui-1.10.0.custom.css']
            }
          }
        },
        docco: {
          coffeescript: {
            src: ['<%= swabstack.app %>/assets/coffee/**/*.coffee'],
            options: {
              output: './docs/CoffeScript/'
            }
          },
          javascript: {
            src: ['<%= swabstack.app %>/assets/js/**/*.js'],
            options: {
              output: './docs/Javascript/'
            }
          },
          server: {
            src: ['server/app.js'],
            options: {
              output: './docs/Server/'
            }
          }
        },
        shell: {
            buildRequire: {
                command: 'node r.js -o assets/js/build.js',
                options: {
                    stdout: true,
                    execOptions: {
                        cwd: 'app'
                    }
                }
            }
        },
        bgShell: {
          connectMongo: {
            cmd: 'mongod', // or function(){return 'ls -la'}
            execOpts: {
              cwd: 'app'
            },
            stdout: true,
            bg: true
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-docco');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-shell');

//registered task 'a' so i dont have to scroll down when running from the sublime grunt plugin
//same as default
grunt.registerTask('a', [
    'dev',
    'connect:testserver',
    'express:dev',
    'watch'
    ]);

grunt.registerTask('default', [
    'dev',
    'connect:testserver',
    'express:dev',
    'watch'
    ]);

grunt.registerTask('dev', [
    'copy:vendorjs',
    'copy:templates', // when starting, copy any templates that may have been added
    'compass:app',
    'coffee', //compile any coffescript files that may have changed
    'targethtml:app'
    ]);

grunt.registerTask('build', [
    'copy:templates', // when starting, copy any templates that may have been added
    'copy:components',
    'copy:assets',
    'shell:buildRequire',
    'targethtml:dist',
    'compass:app',
    'cssmin',
    'copy:requireBuilt',
    ]);

grunt.registerTask('test', [
    'coffee:testcoffee',
    'connect:testserver',
    'watch:tests'
    ]);

grunt.registerTask('docs', [
    'docco',
    'copy:docs'
    ]);

};
