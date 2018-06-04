var config = exports.config = require("./protractor-cucumber-dev-common.conf.js").config;

config.capabilities = {
  browserName: "chrome",
};
