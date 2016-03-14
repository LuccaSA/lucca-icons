module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            sass: {
                files: ['**/*.scss', '**/*.sass'],
                tasks: ['sass'],
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    relativeUrls:true,
                    sourceMap:true,
                    sourceMapFileInline:true,
                    sourceMapRootpath:"..",
                    optimization: 2
                },
                files: [
                    {
                        // Default dist is less based because why not
                        "dist/lucca-icons.min.css": "src/lucca-icons.less",
                        "demo/styles/demo.less.min.css": "demo/styles/demo.less"
                    }
                ]
            }
        },
        sass: {
            development: {
                options: {
                    style: 'compressed',
                    sourcemap: 'inline'
                },
                files: [
                    {
                        "demo/styles/demo.sass.min.css": "demo/styles/demo.scss"
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less'); // loads less compiler
	grunt.loadNpmTasks('grunt-sass'); // loads sass compiler
	grunt.loadNpmTasks('grunt-contrib-sass'); // loads sass compiler
    grunt.loadNpmTasks('grunt-contrib-watch'); // loads watch contrib
    grunt.registerTask('default', ['watch']);
};
