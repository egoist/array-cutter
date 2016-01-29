import test from 'ava'
import arrayCutter from './'

test('main', t => {
	t.same(
		arrayCutter([
			1, 2, 3
		]),
		[[1, 2, 3]]
	)

	t.same(
		arrayCutter([
			1, 2, 3, 4
		], 4),
		[[1, 2, 3, 4]]
	)

	t.same(
		arrayCutter([
			1, 2, 3, 4, 5, 6, 7
		]),
		[[1, 2, 3, 4, 5], [6, 7]]
	)

	t.same(
		arrayCutter([
			1, 2, 3, 4, 5, 6, 7
		], 2),
		[[1, 2], [3, 4], [5, 6], [7]]
	)

	t.throws(function () {
		arrayCutter(1, 2, 3)
	}, TypeError)

	t.throws(function () {
		arrayCutter([1, 2], 'str')
	}, TypeError)
})
