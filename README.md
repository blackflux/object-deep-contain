# object-deep-contain

[![Build Status](https://img.shields.io/travis/simlu/object-deep-contain/master.svg)](https://travis-ci.org/simlu/object-deep-contain)
[![Test Coverage](https://img.shields.io/coveralls/simlu/object-deep-contain/master.svg)](https://coveralls.io/github/simlu/object-deep-contain?branch=master)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=simlu/object-deep-contain)](https://dependabot.com)
[![Dependencies](https://david-dm.org/simlu/object-deep-contain/status.svg)](https://david-dm.org/simlu/object-deep-contain)
[![NPM](https://img.shields.io/npm/v/object-deep-contain.svg)](https://www.npmjs.com/package/object-deep-contain)
[![Downloads](https://img.shields.io/npm/dt/object-deep-contain.svg)](https://www.npmjs.com/package/object-deep-contain)
[![Semantic-Release](https://github.com/simlu/js-gardener/blob/master/assets/icons/semver.svg)](https://github.com/semantic-release/semantic-release)
[![Gardener](https://github.com/simlu/js-gardener/blob/master/assets/badge.svg)](https://github.com/simlu/js-gardener)
[![Gitter](https://github.com/simlu/js-gardener/blob/master/assets/icons/gitter.svg)](https://gitter.im/simlu/object-deep-contain)

Test Object deep contained in other object.

## Install

Install with [npm](https://www.npmjs.com/):

    $ npm install --save object-deep-contain

## Usage

<!-- eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies -->
```js
const objectDeepContain = require('object-deep-contain');

objectDeepContain({ a: [1, 2], b: "c" }, { a: [1, 2] });
// => true

objectDeepContain({ a: [1, 2], b: "c" }, { a: [1] });
// => false
```
