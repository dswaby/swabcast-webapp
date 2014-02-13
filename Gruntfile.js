module.exports = function (grunt, targethtml) {
    /*    Some explanation: dev is used for running locally while working, test is for putting on sendRequestForLatestVersion to make sure shit didnt get fucked up and
    well, dont worry about dat little guy */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            jasminescript: {
                options: {
                    bare: true
                },
                files: {
                    'public/spec/PlayerSpec.js': 'public/spec/PlayerSpec.coffee',
                    'public/spec/SpecHelper.js': 'public/spec/SpecHelper.coffee'
                }
            },
            assets: {
                files: [{
                    expand: true,
                    flatten: false,
                    bare: true,
                    cwd: 'public2/assets/coffee/',
                    src: ['**/*.coffee','*.coffee'],
                    dest: 'public2/assets/js/',
                    ext: '.js'
                }]
            }
        },
         connect: {
            app: {
                options: {
                    port: 9001,
                    base: 'app'
                }
            },
            public2: {
                options: {
                    port: 9009,
                    base: 'public2'
                }
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'public2/config.rb',
                    basePath: 'public2/',
                    cssDir: 'assets/css'
                }
            }
        },
        copy: {
            templates: {
                files: [{
                    expand: true,
                    cwd: 'public2/assets/coffee/',
                    src: ['**/*.{tpl,md}'],
                    dest: 'public2/assets/js/'
                }]
            },
            deploytemp: {
                files: [{
                    expand: true,
                    cwd: 'public2',
                    src: ['**/*.{tpl,js,html,css,png,svg,jpg}'],
                    dest: 'tmp'
                }]
            }

        },
        htmlmin: {
            public1: {
                options: {
                    removeComments: false,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'public2',
                    src: ['**/*.{tpl,js,html,css,png,svg,jpg}'],
                    dest: 'tmp'
                }]
            }
        },
        requirejs: {
              compile: {
                options: {
                    name:'require_main',
                    baseUrl: "public2/assets/js",
                    mainConfigFile: "public2/assets/js/require_main.js",
                    out: "build/prod/optimized.js"
                }
              },
              compile: {
                options: {
                    name:'require_main',
                    baseUrl: "public2/assets/js",
                    mainConfigFile: "public2/assets/js/require_main.js",
                    out: "build/test/optimized.js"
                }
              },
            },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public2/assets/img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'build/prod/img/'                  // Destination path prefix
                }]
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'public2/assets/img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'build/test/img/'                  // Destination path prefix
                }]
            },
        },
        clean: {
            tempfiles:['build/test/tmp/', 'build/prod/tmp/'],
            coffeescript: ['public2/assets/js/apps/**/*.js', 'public2/assets/js/entities/**/*.js', 'public2/assets/js/common/**/*.js'],
            compiledjs: ['public2/assets/js/apps/', 'public2/assets/js/entities/','public2/assets/js/common/'],
            deploytemp: ['tmp/']
        },
        watch: {
            
            compass: {
                files: ['app/scss/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            
            livereload: {
                files: [
                    
                    'app/index.html',
                    'app/assets/{,**/}*.css',
                    'app/assets/{,**/}*.js',
                    'app/assets/{,**/}*.hbs',
                    'app/assets/{,*/}*.{png,jpg,jpeg,gif,webp}',
                    
                    'test/spec/{,**/}*.js'
                ],
                tasks: ['exec'],
                options: {
                    livereload: true
                }
            }
            /* not used at the moment
            handlebars: {
                files: [
                    '<%= yeoman.app %>/templates/*.hbs'
                ],
                tasks: ['handlebars']
            }*/
        },
        // watch: {
        //     serve : {
        //         files: ['public2/'],
        //         options: {
        //             livereload: true,
        //         }
        //     },
        //     coffeetests: {
        //         files: ['public2/spec/*.coffee'],
        //         tasks: ["clean:coffeescript","coffee:jasminescript"],
        //         options: {
        //             livereload: true,
        //        }
        //     },
        //     coffeescript : {
        //         files: 'public2/assets/coffee/**/*.coffee',
        //         tasks: "compilecoffee",
        //         options: {
        //             spawn: false, //important so that the task runs in the same context
        //             livereload: true,
        //         }
        //     },
        //     dev: {
        //         files: ['public2/scss/*.scss','public2/assets/**/*.tpl','public2/assets/coffee/**/*.coffee','public2/index.html'],
        //         tasks: ['newer:compass:dist', 'newer:copy:templates','newer:coffee:jasminescript','newer:coffee:assets'],
        //         options: {
        //             livereload: false,
        //         }
        //     }
        // },
        'sftp-deploy': {
            staging: {
                auth: {
                    host: 'swa.by',
                    port: 22,
                    authKey: 'privateKey'
                },
                src: '/Users/danny/dev/swabcast/public2',
                dest: '/home/dswabster/public/swa.by/public/staging',
                exclusions: ['/Users/danny/dev/swabcast/public2/**/.DS_Store', '/Users/danny/dev/swabcast/public2/.sass-cache',
                '/Users/danny/dev/swabcast/public2/.idea', '/Users/danny/dev/swabcast/public2/assets/coffee',
                '/Users/danny/dev/swabcast/public2/assets/foundation-icons', '/Users/danny/dev/swabcast/public2/assets/css/svgs',
                '/Users/danny/dev/swabcast/public2/assets/css/images'],
                server_sep: '/'
            },
            changedfiles: {
                auth: {
                    host: 'swa.by',
                    port: 22,
                    authKey: 'privateKey'
                },
                src: '/Users/danny/dev/swabcast/tmp',
                dest: '/home/dswabster/public/swa.by/public/staging',
                exclusions: ['/Users/danny/dev/swabcast/public2/**/.DS_Store'],
                server_sep: '/'
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
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-sftp-deploy');
    grunt.loadNpmTasks('grunt-newer');

    // starts express server with live testing via testserver
    grunt.registerTask('default', function (target) {

        grunt.option('force', true);

        grunt.task.run([
            'connect:app',
            'express:dev',
            'exec',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('serve', ['connect:public2', 'watch:serve']);
    grunt.registerTask('compilecoffee', ['clean:coffeescript', 'copy','coffee']);
    grunt.registerTask('devtime', ['connect:public1', 'connect:public2','watch:dev']);
    grunt.registerTask("coffee-watch", [ "watch:coffeescript", "watch:coffeetests"]);
    grunt.registerTask('build', ['requirejs', 'imagemin']);
    grunt.registerTask('deploynewer',['newer:copy:deploytemp','sftp-deploy:changedfiles', 'clean:deploytemp']);
    grunt.registerTask('sass', ['sass:dev']);
};