const expect = require('chai').expect;
const match = require("./../src/index").match;


describe("Testing Object Matcher", () => {
  it("Testing String", () => {
    expect(match("value1", "value1")).to.equal(true);
    expect(match("value1", "value2")).to.equal(false);
  });

  it("Testing List", () => {
    expect(match([1, 2, 3], [1, 2, 3])).to.equal(true);
    expect(match([{ key: "value1" }], [{ key: "value1" }])).to.equal(true);
    expect(match([{ key: "value1" }], [{ key: "value2" }])).to.equal(false);
    expect(match([1, 2, 3], [3, 2, 1])).to.equal(false);
    expect(match([1, 2, 3], [1, 2])).to.equal(false);
    expect(match([], [])).to.equal(true);
  });

  it("Testing Object", () => {
    expect(match({}, {})).to.equal(true);
    expect(match({ key: "value1" }, { key: "value1" })).to.equal(true);
    expect(match({ key: "value1" }, { key: "value2" })).to.equal(false);
  });

  it("Testing Type Mismatch", () => {
    expect(match({}, "")).to.equal(false);
    expect(match({}, [])).to.equal(false);
  });
});
