# grunth-cli

> Runs grunt with the --harmony_* flags

**This package is deprecated. You shouldn't need it with newer Node.js versions.**

[![Build Status](https://travis-ci.org/EE/grunth-cli.svg?branch=master)](https://travis-ci.org/EE/grunth-cli)
<!--
[![Build status](https://ci.appveyor.com/api/projects/status/21v8mvntrl3uoqgo/branch/master?svg=true)](https://ci.appveyor.com/project/mgol/grunth-cli/branch/master)
-->
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

## Description
This package exposes the `grunth` shell command that works like `grunt` but fires it using the node `--harmony_*` flags. Thanks to that you can use ECMAScript 6 features that have experimental implementation in Node, like `const`/`let` block scoping, generators etc.

NOTE:

1. In most cases it might better to use Node.js 4 or newer with regular grunt-cli instead. However, if you need to use Node.js 0.12 or want to experiment even in newer Node, go ahead.
2. In Node.js 4 or newer this module uses `grunt --harmony` as the `--harmony` flag doesn't enable completely in-progress features as it was in V8 used in Node.js 0.12.

The module is a replacement for the `grunt-cli` package.

To install the module globally:

```shell
npm -g install grunth-cli
```

Note: current version requires Node >=0.12.0. If you need Node 0.10 support, use:
```shell
npm -g install grunth-cli@0.2.x
```

Once the module has been installed, in every project that uses Grunt you can replace `grunt` with `grunth` in your commands, like:

```sh
grunth sass
```

Note that, like before, apart from installing the `grunth-cli` global module, you need to install the `grunt` package locally in every project, like:
```shell
npm install grunt --save-dev
```

## Installing grunth-cli locally
If you prefer the idiomatic Node.js method to get started with a project (`npm install && npm test`) then install `grunth-cli` locally with `npm install grunth-cli --save-dev`. Then add a script to your `package.json` to run the associated grunt command: `"scripts": { "test": "grunth test" } `. Now `npm test` will use the locally installed `./node_modules/.bin/grunth` executable to run your Grunt commands.

To read more about npm scripts, please visit the npm docs: [https://npmjs.org/doc/misc/npm-scripts.html](https://npmjs.org/doc/misc/npm-scripts.html).

## Supported Node.js versions
This project supports Node.js 0.12 & newer.

## License
Copyright (c) Laboratorium EE. Licensed under the MIT license.
