'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        eslint: {
            all: {
                src: [
                    '*.js',
                    'bin/grunth',
                    'lib/*.js',
                ],
            },
        },

        jscs: {
            all: {
                src: '<%= eslint.all.src %>',
                options: {
                    config: '.jscsrc',
                },
            },
        },
    });

    // Load all grunt tasks matching the `grunt-*` pattern.
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('asserts', function () {
        try {
            /* eslint-disable no-eval */
            eval('function* f() {yield 2;} var g = f(); g.next();');
            /* eslint-ensable no-eval */
        } catch (e) {
            throw new Error('Generators not recognized!');
        }
        grunt.log.writeln('Generators recognized.');

        try {
            /* eslint-disable no-eval */
            eval('function f() {"use strict"; const x = 2; let y = 3; return [x, y];} f();');
            /* eslint-ensable no-eval */
        } catch (e) {
            throw new Error('Block scoping (const/let) not recognized!');
        }
        grunt.log.writeln('Block scoping (const/let) recognized.');
    });

    grunt.registerTask('lint', [
        'eslint',
        'jscs',
    ]);

    grunt.registerTask('test', [
        'lint',
        'asserts',
    ]);

    grunt.registerTask('default', ['test']);
};
