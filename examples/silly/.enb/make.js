var ENB_ROOLE_TECHS = '../../../techs';

module.exports = function (config) {
    config.nodes('bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getLevels(config) } ],
            [ require('enb/techs/file-provider'), { target: '?.bemdecl.js' } ],
            require('enb/techs/files'),
            require('enb/techs/deps'),
            require(ENB_ROOLE_TECHS + '/css-roole')
        ]);
        nodeConfig.addTargets([
            '?.css'
        ]);
    });

};

function getLevels (config) {
    return [
        'blocks'
    ].map(function (level) {
        return config.resolvePath(level);
    });
}
