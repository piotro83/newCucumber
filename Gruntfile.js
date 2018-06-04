module.exports = function (grunt) {
    grunt.initConfig({


        shell: {
            webdriverManagerUpdate: {
                command: './node_modules/.bin/webdriver-manager update'
            }
        },

        // Protractor plugin
        protractor: {
            options: {
                noColor: true
            },
            "dev-chrome": {
                configFile: "conf/protractor-cucumber-dev-chrome.conf.js"
            },
            "dev-ie": {
                configFile: "conf/protractor-cucumber-dev-ie.conf.js"
            },
            "dev-firefox": {
                configFile: "conf/protractor-cucumber-dev-firefox.conf.js"
            },
            "ci-chrome": {
                configFile: "conf/protractor-cucumber-ci-chrome.conf.js"
            },
            "ci-firefox": {
                configFile: "conf/protractor-cucumber-ci-firefox.conf.js"
            },
            "ci-ie": {
                configFile: "conf/protractor-cucumber-ci-ie.conf.js"
            },
            "dev-chrome-smoke": {
                configFile: "conf/protractor-cucumber-dev-chrome-smoke.conf.js"
            },
            "dev-firefox-smoke": {
                configFile: "conf/protractor-cucumber-dev-firefox-smoke.conf.js"
            },
            "dev-chrome-sanity": {
                configFile: "conf/protractor-cucumber-dev-chrome-sanity.conf.js"
            },
            "ci-chrome-smoke": {
                configFile: "conf/protractor-cucumber-ci-chrome-smoke.conf.js"
            },
            "ci-chrome-sanity": {
                configFile: "conf/protractor-cucumber-ci-chrome-sanity.conf.js"
            },
            "dev-chrome-allegro-import": {
                configFile: "conf/protractor-cucumber-dev-chrome-allegro-import.conf.js"
            },
            "dev-chrome-product-fields": {
                configFile: "conf/protractor-cucumber-dev-chrome-product-fields.conf.js"
            },
        },

    });

    // Tasks
    grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.loadNpmTasks("grunt-protractor-runner");

    grunt.registerTask('acceptance.ci', [
        'shell:webdriverManagerUpdate',
        'protractor:ci-chrome',
        'protractor:ci-firefox'
    ]);

    grunt.registerTask('ff', [
        'protractor:dev-firefox'
    ]);

    grunt.registerTask('chrome', [
        'protractor:dev-chrome'
    ]);

    grunt.registerTask('chrome-allegro-import', [
        'protractor:dev-chrome-allegro-import'
    ]);

    grunt.registerTask('chrome-product-fields', [
        'protractor:dev-chrome-product-fields'
    ]);

    grunt.registerTask('ci:chrome', [
        'protractor:ci-chrome'
    ]);

    grunt.registerTask('ci:chrome-smoke', [
        'protractor:ci-chrome-smoke'
    ]);

    grunt.registerTask('ci:chrome-sanity', [
        'protractor:ci-chrome-sanity'
    ]);

    grunt.registerTask('chrome-smoke', [
        'protractor:dev-chrome-smoke'
    ]);

    grunt.registerTask('ff-smoke', [
        'protractor:dev-firefox-smoke'
    ]);

    grunt.registerTask('chrome-sanity', [
        'protractor:dev-chrome-sanity'
    ]);

    grunt.registerTask('ci:ff', [
        'protractor:ci-firefox'
    ]);

};
