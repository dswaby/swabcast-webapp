var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};


module.exports = function (grunt) {

    var swabstackConfig = {
        app: 'app',
        dist: 'dist'
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
