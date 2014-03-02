var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
//
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'handlebars'

module.exports = function (grunt) {
    // load all grunt tasks
    // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // // show elapsed time at the end
    // require('time-grunt')(grunt);

    // // configurable paths
    // var swabyConfig = {
    //     app: 'app',
    //     dist: 'dist',
    //     dev: 'dev'
    // };
        // configurable paths
    var swabstackConfig = {
        app: 'app',
        dist: 'dist'
    };
    grunt.initConfig({
        swabstack: swabstackConfig,

    // grunt.initConfig({
    //     swabstack: swabyConfig,

    //     // watch list
    //     watch: {

    //         compass: {
    //             files: ['app/scss/{,*/}*.{scss,sass}'],
    //             tasks: ['compass']
    //         },

    //         livereload: {
    //             files: [

    //                 '<%= swabstack.app %>/*.html',
    //                 '{.tmp,<%= swabstack.app %>}/styles/{,**/}*.css',
    //                 '{.tmp,<%= swabstack.app %>}/scripts/{,**/}*.js',
    //                 '{.tmp,<%= swabstack.app %>}/templates/{,**/}*.hbs',
    //                 '<%= swabstack.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',

    //                 'test/spec/{,**/}*.js'
    //             ],
    //             tasks: ['exec'],
    //             options: {
    //                 livereload: true
    //             }
    //         }
    //         /* not used at the moment
    //         handlebars: {
    //             files: [
    //                 '<%= swabstack.app %>/templates/*.hbs'
    //             ],
    //             tasks: ['handlebars']
    //         }*/
    //     },

    //     // testing server
    //     connect: {
    //         testserver: {
    //             options: {
    //                 port: 1234,
    //                 base: '.'
    //             }
    //         }
    //     },

    //     // mocha command
    //     // exec: {
    //     //     mocha: {
    //     //         command: 'mocha-phantomjs http://localhost:<%= connect.testserver.options.port %>/test',
    //     //         stdout: true
    //     //     }
    //     // },


    //     // express app
    //     express: {
    //         options: {
    //             // Override defaults here
    //             port: '9000'
    //         },
    //         dev: {
    //             options: {
    //                 script: 'server/app.js'
    //             }
    //         },
    //         prod: {
    //             options: {
    //                 script: 'server/app.js'
    //             }
    //         },
    //         test: {
    //             options: {
    //                 script: 'server/app.js'
    //             }
    //         }
    //     },


    //     // open app and test page
    //     open: {
    //         server: {
    //             path: 'http://localhost:<%= express.options.port %>'
    //         }
    //     },

    //     clean: {
    //         dist: ['.tmp', '<%= swabstack.dist %>/*'],
    //         server: '.tmp'
    //     },

    //     // // linting
    //     // jshint: {
    //     //     options: {
    //     //         jshintrc: '.jshintrc',
    //     //         reporter: require('jshint-stylish')
    //     //     },
    //     //     all: [
    //     //         'Gruntfile.js',
    //     //         '<%= swabstack.app %>/scripts/{,*/}*.js',
    //     //         '!<%= swabstack.app %>/scripts/vendor/*',
    //     //         'test/spec/{,*/}*.js'
    //     //     ]
    //     // },


    //     // compass
    //     compass: {
    //         options: {
    //             sassDir: '<%= swabstack.app %>/scss',
    //             cssDir: '.tmp/styles',
    //             imagesDir: '<%= swabstack.app %>/images',
    //             javascriptsDir: '<%= swabstack.app %>/scripts',
    //             fontsDir: '<%= swabstack.app %>/styles/fonts',
    //             importPath: 'app/bower_components',
    //             relativeAssets: true
    //         },
    //         dist: {},
    //         server: {
    //             options: {
    //                 debugInfo: true
    //             }
    //         }
    //     },


    //     // require
    //     requirejs: {
    //         dist: {
    //             // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
    //             options: {
    //                 // `name` and `out` is set by grunt-usemin
    //                 baseUrl: 'app/scripts',
    //                 optimize: 'none',
    //                 paths: {
    //                     'templates': '../../.tmp/scripts/templates'
    //                 },
    //                 // TODO: Figure out how to make sourcemaps work with grunt-usemin
    //                 // https://github.com/swabstack/grunt-usemin/issues/30
    //                 //generateSourceMaps: true,
    //                 // required to support SourceMaps
    //                 // http://requirejs.org/docs/errors.html#sourcemapcomments
    //                 preserveLicenseComments: false,
    //                 useStrict: true,
    //                 wrap: true,
    //                 //uglify2: {} // https://github.com/mishoo/UglifyJS2
    //                 pragmasOnSave: {
    //                     //removes Handlebars.Parser code (used to compile template strings) set
    //                     //it to `false` if you need to parse template strings even after build
    //                     excludeHbsParser : true,
    //                     // kills the entire plugin set once it's built.
    //                     excludeHbs: true,
    //                     // removes i18n precompiler, handlebars and json2
    //                     excludeAfterBuild: true
    //                 }
    //             }
    //         }
    //     },

    //     useminPrepare: {
    //         html: '<%= swabstack.app %>/index.html',
    //         options: {
    //             dest: '<%= swabstack.dist %>'
    //         }
    //     },

    //     usemin: {
    //         html: ['<%= swabstack.dist %>/{,*/}*.html'],
    //         css: ['<%= swabstack.dist %>/styles/{,*/}*.css'],
    //         options: {
    //             dirs: ['<%= swabstack.dist %>']
    //         }
    //     },

    //     imagemin: {
    //         dist: {
    //             files: [{
    //                 expand: true,
    //                 cwd: '<%= swabstack.app %>/images',
    //                 src: '{,*/}*.{png,jpg,jpeg}',
    //                 dest: '<%= swabstack.dist %>/images'
    //             }]
    //         }
    //     },

    //     cssmin: {
    //         dist: {
    //             files: {
    //                 '<%= swabstack.dist %>/styles/main.css': [
    //                     '.tmp/styles/{,*/}*.css',
    //                     '<%= swabstack.app %>/styles/{,*/}*.css'
    //                 ]
    //             }
    //         }
    //     },

    //     htmlmin: {
    //         dist: {
    //             options: {
    //                 /*removeCommentsFromCDATA: true,
    //                 // https://github.com/swabstack/grunt-usemin/issues/44
    //                 //collapseWhitespace: true,
    //                 collapseBooleanAttributes: true,
    //                 removeAttributeQuotes: true,
    //                 removeRedundantAttributes: true,
    //                 useShortDoctype: true,
    //                 removeEmptyAttributes: true,
    //                 removeOptionalTags: true*/
    //             },
    //             files: [{
    //                 expand: true,
    //                 cwd: '<%= swabstack.app %>',
    //                 src: '*.html',
    //                 dest: '<%= swabstack.dist %>'
    //             }]
    //         }
    //     },

    //     copy: {
    //         dist: {
    //             files: [{
    //                 expand: true,
    //                 dot: true,
    //                 cwd: '<%= swabstack.app %>',
    //                 dest: '<%= swabstack.dist %>',
    //                 src: [
    //                     '*.{ico,txt}',
    //                     '.htaccess',
    //                     'images/{,*/}*.{webp,gif}',
    //                     'bower_components/requirejs/require.js'
    //                 ]
    //             }]
    //         }
    //     },

    //     bower: {
    //         all: {
    //             rjsConfig: '<%= swabstack.app %>/scripts/main.js'
    //         }
    //     },

    //     // handlebars
    //     handlebars: {
    //         compile: {
    //             options: {
    //                 namespace: 'JST',
    //                 amd: true
    //             },
    //             files: {
    //                 '.tmp/scripts/templates.js': ['templates/**/*.hbs']
    //             }
    //         }
    //     }
    // });

    // grunt.registerTask('createDefaultTemplate', function () {
    //     grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
    // });

    // // starts express server with live testing via testserver
    // grunt.registerTask('default', function (target) {

    //     // what is this??
    //     if (target === 'dist') {
    //         return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    //     }

    //     grunt.option('force', true);

    //     grunt.task.run([
    //         'clean:server',
    //         'compass:server',
    //         'connect:testserver',
    //         'express:dev',
    //         'exec',
    //         'open',
    //         'watch'
    //     ]);
    // });

    // // todo fix these
    // grunt.registerTask('test', [
    //     'clean:server',
    //     'createDefaultTemplate',
    //     'handlebars',
    //     'compass',
    //     'connect:testserver',
    //     'exec:mocha'
    // ]);

    // grunt.registerTask('build', [
    //     'createDefaultTemplate',
    //     'handlebars',
    //     'compass:dist',
    //     'useminPrepare',
    //     'requirejs',
    //     'imagemin',
    //     'htmlmin',
    //     'concat',
    //     'cssmin',
    //     'uglify',
    //     'copy',
    //     'usemin'
    // ]);
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
                files: ['<%= swabstack.app %>/assets/coffee/{,*/}*.coffee'],
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



        connect: {
            testserver: {
                options: {
                    port: 1234,
                    base: '.'
                }
            }
        },
        coffee: {
            glob_to_multiple: {
                expand: true,
                flatten: false,
                bare: true,
                cwd: '<%= swabstack.app %>/assets/coffee/',
                src: ['**/*.coffee','*.coffee'],
                dest: '<%= swabstack.app %>/assets/js/',
                ext: '.js'
            }
        },
        copy: {
            templates: {
                files: [{
                    expand: true,
                    cwd: '<%= swabstack.app %>/assets/coffee/',
                    src: ['**/*.{tpl,md}'],
                    dest: '<%= swabstack.app %>/assets/js/'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('default', [
    'connect:testserver',
    'express:dev',
    'watch'
    ]);

};
