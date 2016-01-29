# array-cutter [![NPM version](https://img.shields.io/npm/v/array-cutter.svg)](https://npmjs.com/package/array-cutter) [![NPM downloads](https://img.shields.io/npm/dm/array-cutter.svg)](https://npmjs.com/package/array-cutter) [![Build Status](https://img.shields.io/circleci/project/egoist/array-cutter/master.svg)](https://circleci.com/gh/egoist/array-cutter)

> Make an equal division to an array.

## Install

```
$ npm install --save array-cutter
```

## Usage

```js
const arrayCutter = require('array-cutter')

arrayCutter([1, 2, 3, 4, 5, 6, 7])

// returns
// array is divided by 5
[
	[1, 2, 3, 4, 5],
	[6, 7]
]

// divided by a number
arrayCutter([1, 2, 3, 4, 5, 6, 7], 4)

// returns
[
	[1, 2, 3, 4],
	[5, 6, 7]
]
```

## License

MIT © [EGOIST](https://github.com/egoist)
