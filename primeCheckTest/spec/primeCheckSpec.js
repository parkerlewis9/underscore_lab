var func = require("../primeCheck.js");

describe("Prime Check Test", function() {
	it("should return primes between 1 and 100", function() {
		expect(func.primePrint()).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
	});
})