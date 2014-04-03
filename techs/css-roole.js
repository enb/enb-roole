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
 * * *String* **sourceSuffixes** — суффиксы файлов, по которым строится `files`-таргет.
 *   По умолчанию — `['css', 'roo']`.
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb-roole/techs/css-roole'));
 * ```
 */
var path = require('path');
var vow = require('vow');
var vfs = require('enb/lib/fs/async-fs');
var roole = require('roole');
var vowNode = require('vow-node');
var rooleCompile = vowNode.promisify(roole.compile);

module.exports = require('enb/techs/css').buildFlow()
    .name('css-roole')
    .target('target', '?.css')
    .useFileList(['css', 'roo'])
    .builder(function (sourceFiles) {
        var preprocessor = this._getCssPreprocessor();
        var node = this.node;
        var indent = '    ';
        var imports = {};
        var options = {
            indent: indent,
            imports: imports,
            base: node.getPath()
        };

        return vow.all(
                sourceFiles.map(function (file) {
                    return vfs.read(file.fullname)
                        .then(function (source) {
                            imports[file.fullname] = preprocessor._processUrls(source.toString(), file.fullname);

                            return '@import "' + node.relativePath(file.fullname) + '";';
                        });
                })
            )
            .then(function (sources) {
                return rooleCompile(sources.join('\n'), options);
            })
            .fail(function (err) {
                var message = err.message;

                if (typeof err.context === 'function') {
                    message += ' at ./' + path.relative(node._root, err.loc.filename) + '\n' + err.context(indent);
                }

                throw new SyntaxError(message);
            });
    })
    .createTech();
