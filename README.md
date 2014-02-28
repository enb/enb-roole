enb-roole [![NPM version](https://badge.fury.io/js/enb-roole.png)](http://badge.fury.io/js/enb-roole) [![Build Status](https://travis-ci.org/enb-make/enb-roole.png?branch=master)](https://travis-ci.org/enb-make/enb-roole) [![Dependency Status](https://gemnasium.com/enb-make/enb-roole.png)](https://gemnasium.com/enb-make/enb-roole)
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

* *String* **target** — Результирующий таргет. По умолчанию — `?.vanilla.js`.
* *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов (его предоставляет технология `files`). По умолчанию — `?.files`.

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
