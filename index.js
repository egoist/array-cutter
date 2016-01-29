'use strict'

module.exports = function (arr, divideBy) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array')
	}

	divideBy = divideBy || 5

	if (typeof divideBy !== 'number') {
		throw new TypeError('Expected to be divided by a number')
	}

	if (arr.length <= divideBy) {
		return [arr]
	}

	var res = []
	var count = Math.ceil(arr.length / divideBy)

	for (var i = 0; i < count; i++) {
		res[i] = arr.slice(i * divideBy, (i + 1) * divideBy)
	}

	return res
}
