var path = require('path');
var fs = require('fs');
var MakePlatform = require('enb/lib/make');
var Logger = require('enb/lib/logger');
var makePlatform = new MakePlatform();
var logger = new Logger();
var fixturesRelativePath = path.join('..', '..', 'examples', 'silly');
var fixturesAbsolutePath = path.join(__dirname, fixturesRelativePath);

logger.setEnabled(false);

function TestTargets(targets) {
    this._targets = targets;
}

TestTargets.prototype.build = function () {
    var targets = this._targets;

    return makePlatform.init(fixturesAbsolutePath)
        .then(function () {
            makePlatform.loadCache();
            makePlatform.setLogger(logger);
            makePlatform.buildTargets(targets);
        })
        .then(function () {
            makePlatform.saveCache();
            makePlatform.destruct();
        });
};

TestTargets.prototype.read = function () {
    var map = {};

    this._targets.forEach(function (target) {
        var fullpath = path.join(fixturesAbsolutePath, target);

        map[target] = fs.readFileSync(fullpath, 'utf-8');
    });

    return map;
};

exports.TestTargets = TestTargets;
