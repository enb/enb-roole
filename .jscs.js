var config = require('enb-validate-code/jscs');

config.excludeFiles = [
    'node_modules',
    'examples/silly/.enb/tmp',
    'examples/silly/bundles/*'
]

module.exports = config;
