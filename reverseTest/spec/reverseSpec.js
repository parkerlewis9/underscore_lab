var func = require("../reverse.js");

describe("Reverse Test", function() {
	it("should reverse the string passed in", function() {
		expect(func.reverse("bob")).toEqual("bob")
	})

});