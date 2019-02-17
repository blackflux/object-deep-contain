# object-deep-contain

[![Build Status](https://circleci.com/gh/blackflux/object-deep-contain.png?style=shield)](https://circleci.com/gh/blackflux/object-deep-contain)
[![Test Coverage](https://img.shields.io/coveralls/blackflux/object-deep-contain/master.svg)](https://coveralls.io/github/blackflux/object-deep-contain?branch=master)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=blackflux/object-deep-contain)](https://dependabot.com)
[![Dependencies](https://david-dm.org/blackflux/object-deep-contain/status.svg)](https://david-dm.org/blackflux/object-deep-contain)
[![NPM](https://img.shields.io/npm/v/object-deep-contain.svg)](https://www.npmjs.com/package/object-deep-contain)
[![Downloads](https://img.shields.io/npm/dt/object-deep-contain.svg)](https://www.npmjs.com/package/object-deep-contain)
[![Semantic-Release](https://github.com/blackflux/js-gardener/blob/master/assets/icons/semver.svg)](https://github.com/semantic-release/semantic-release)
[![Gardener](https://github.com/blackflux/js-gardener/blob/master/assets/badge.svg)](https://github.com/blackflux/js-gardener)

Test Object deep contained in other object.

## Install

Install with [npm](https://www.npmjs.com/):

    $ npm install --save object-deep-contain

## Usage

<!-- eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies -->
```js
const deepContain = require('object-deep-contain');

deepContain({ a: [1, 2], b: 'c' }, { a: [1, 2] });
// => true

deepContain({ a: [1, 2], b: 'c' }, { a: [1] });
// => false
```

## Considerations

Lists are only "contained" if they are the same length and every
element is contained in the corresponding element.

Non List object types are "contained" all keys in the needle exist 
in the haystack and their values are contained.

All other object types are "contained" if thye match exactly (`===`).
 
