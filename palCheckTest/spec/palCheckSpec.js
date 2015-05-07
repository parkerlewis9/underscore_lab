var func = require("../palCheck.js");

describe("Pal Check Tests", function() {
	it("should return true when given a palendrome", function() {
		expect(func.palCheck("bob")).toEqual(true)
	});

});