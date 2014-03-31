var TestTargets = require('../lib/test-targets').TestTargets;
var targets = new TestTargets([
    'bundles/css-only/css-only.css',
    'bundles/roo-only/roo-only.css',
    'bundles/mix/mix.css'
]);
var css;

describe('css-roole', function () {
    beforeEach(function (done) {
        return targets.build()
            .then(function () {
                css = targets.read();
                done();
            });
    });

    it('must build css', function () {
        css['bundles/css-only/css-only.css'].must.include('.css-block');
    });

    it('must build roole', function () {
        css['bundles/roo-only/roo-only.css'].must.include('.roo-block');
    });

    it('must build css & roole', function () {
        css['bundles/css-only/css-only.css'].must.include('.css-block');
        css['bundles/roo-only/roo-only.css'].must.include('.roo-block');
    });

    it('must relative image urls', function () {
        css['bundles/css-only/css-only.css'].must.include('../../blocks/css-block/css-block.png');
    });
});
