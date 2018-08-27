const assert = require("assert");
const r = require("../roman");

describe("romanNumbers", () => {
  it("Test Number", () => {
    const romanEqivalent = r.findRoman(949);
    assert.equal(romanEqivalent, "CMXLIX");
  });
});
