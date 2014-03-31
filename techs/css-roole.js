/**
 * css-roole
 * =========
 *
 * Собирает *css*-файлы вместе с *roo*-файлами по deps'ам, раскрывает инклуды и ссылки, сохраняет в виде `?.css`.
 *
 * **Опции**
 *
 * * *String* **target** — Результирующий таргет. По умолчанию `?.css`.
 * * *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
 *   (его предоставляет технология `files`). По умолчанию — `?.files`.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb-roole/techs/css-roole'));
 * ```
 */
var roole = require('roole');
var vowNode = require('vow-node');
var rooleCompile = vowNode.promisify(roole.compile);

module.exports = require('enb/techs/css').buildFlow()
    .name('css-roole')
    .target('target', '?.css')
    .useFileList(['css', 'roo'])
    .builder(function (sourceFiles) {
        var node = this.node;
        var options = {
            base: node.getPath()
        };
        var source = sourceFiles.map(function (file) {
            return '@import "' + node.relativePath(file.fullname) + '";';
        }).join('\n');

        return this._processCss(source, node.resolvePath(this._target))
            .then(function (source) {
                return rooleCompile(source, options);
            })
            .fail(function (err) {
                throw new Error(err);
            });
    })
    .createTech();
