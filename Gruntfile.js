var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function(grunt) {
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
                files: ['<%= swabstack.app %>/assets/scss/app.scss'],
                tasks: ['compass:app']
            },
            coffee: {
                files: ['<%= swabstack.app %>/assets/coffee/{,**/}*.coffee'],
                tasks: ['coffee:glob_to_multiple','shell:mocha-phantomjs']
            },
            tests: {
                files: ['<%= swabstack.test %>/coffee/*.coffee'],
                tasks: ['coffee:testcoffee','shell:mocha-phantomjs',
]
            },
            templates: {
                files: ['<%= swabstack.app %>}/assets/**/templates/*.tpl'],
                tasks: ['copy:templates', 'coffe:glob_to_multiple']
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
        // generate html based on target
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
                src: ['**/*.coffee', '*.coffee'],
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
            'mocha-phantomjs': {
                command: 'mocha-phantomjs -R dot http://localhost:1234/test/TestRunner.html',
                options: {
                    stdout: true,
                    stderr: true
                }
            },
            'buildRequire': {
                command: 'node r.js -o assets/js/build.js',
                options: {
                    stdout: true,
                    execOptions: {
                        cwd: 'app'
                    }
                }
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

    grunt.registerTask('default', [
        'dev',
        'connect:testserver',
        'express:dev',
        'shell:mocha-phantomjs',
        'watch'
    ]);

    grunt.task.registerTask('dev', 'subset of common development tasks used in other tasks', function(){
        grunt.task.run( [
            'copy:vendorjs',
            'copy:templates', // when starting, copy any templates that may have been added
            'compass:app',
            'coffee', //compile any coffescript files that may have changed
            'targethtml:app'
        ]);
    });

    grunt.task.registerTask('test', 'for writing tests, only watches test folder and runs on change', function(){
        grunt.task.run( [
            'coffee:testcoffee',
            'connect:testserver',
            'shell:mocha-phantomjs',
            'watch:tests'
        ]);
    });

    grunt.task.registerTask('docs', 'generates docs from source and adds to dist/ ', function(){
        grunt.task.run( [
            'docco',
            'copy:docs'
        ]);
    });

    grunt.task.registerTask('build', 'creates optimized distribution', function(){
        grunt.task.run( [
            'copy:templates',
            'copy:components',
            'copy:assets',
            'shell:buildRequire',
            'targethtml:dist',
            'compass:app',
            'cssmin',
            'copy:requireBuilt'
        ]);
    });

};
