var webpackConfig = require('@vue/cli-service/webpack.config.js')

module.exports = function(config) {
    config.set({
        frameworks: ['mocha'],
        files: [
            'tests/**/*.spec.js'
        ],
        preprocessors: {
            'tests/unit/*.spec.js': ['webpack','sourcemap','coverage']
        },
        webpack: webpackConfig,
        browsers: ['ChromeHeadless'],
        reporters: ['spec', 'coverage'],
        coverageReporter: {
          dir: './coverage',
          reporters: [
            { type: 'lcov', subdir: '.' },
            { type: 'text-summary' }
          ]
        }
    })
}