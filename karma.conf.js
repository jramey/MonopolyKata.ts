module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        singleRun: true,
        files: [
            { pattern: 'dest/**/*.js', include: true }
        ],
        reporters: ['progress'],
        noResolve: false
    });
};