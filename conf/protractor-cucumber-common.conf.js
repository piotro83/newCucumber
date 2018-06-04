let URL = "http://localhost/woo32tests/wp-admin/";
let TIMEOUT = 60000;


exports.config = Object.assign({}, env, {
    cucumberOpts: {
        require: '../../cucumber4Steps.js',
        tags: '',
        format: 'summary',
        strict: true,
        'format-options': '{"colorsEnabled": false}'
    }


    specs: [
        '../test-acceptance/features/test.feature',
    ],

    cucumberOpts: {
        compiler: "es6:babel-core/register",
        require: '../test-acceptance/features/**/*/*.js',
        strict: true,
        'no-colors': true,

        // keepAlive: false,
    },

};

