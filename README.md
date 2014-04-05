enb-roole [![NPM version](https://badge.fury.io/js/enb-roole.svg)](http://badge.fury.io/js/enb-roole) [![Build Status](https://travis-ci.org/enb-make/enb-roole.svg?branch=master)](https://travis-ci.org/enb-make/enb-roole) [![Dependency Status](https://gemnasium.com/enb-make/enb-roole.svg)](https://gemnasium.com/enb-make/enb-roole)
=========

Поддержка [`Roole`](https://github.com/curvedmark/roole) для ENB.

Установка:
----------

```
npm install --save-dev enb-roole
```

Для работы модуля требуется зависимость от пакета `enb` версии 0.8.22 или выше.

Технология css-roole
====================

Собирает `css`-файлы вместе с `roo`-файлами по deps'ам, раскрывает инклуды и ссылки, сохраняет в виде `?.css`.

**Опции**

* *String* **target** — Результирующий таргет. По умолчанию — `?.css`.
* *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов (его предоставляет технология `files`). По умолчанию — `?.files`.
* *String* **sourceSuffixes** — суффиксы файлов, по которым строится `files`-таргет. По умолчанию — `['css',
'roo']`. По умолчанию — `['css', 'roo']`.
* *Array* **prefixes** — массив вендорных префиксов('webkit', 'moz', 'ms', 'o') css свойств. По умолчанию — `[]`.

**Пример**

```javascript
nodeConfig.addTech(require('enb-roole/techs/css-roole'));
```

История изменений
-----------------

История изменений на [отдельной странице](/CHANGELOG.md).

Разработка
----------
Руководство на [отдельной странице](/CONTRIBUTION.md).

Запуск тестов
-------------
```
$ npm test
```
