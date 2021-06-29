let substitution = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
    it("Should return false if the substitution alphabet is missing", () => {
        const actual = substitution.substitution("message");
        expect(actual).to.be.false;
    });
    it("Should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitution.substitution("message", "abc");
        expect(actual).to.be.false;
    });
    it("Should return false if the substitution alphabet does not contain unique characters", () => {
        const actual = substitution.substitution("message", "abcddefghijklmnopqrstuvwxyzz");
        expect(actual).to.be.false;
    });
    it("Should encode a message by using the given substitution alphabet", () => {
        const actual = substitution.substitution("message", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "nvhhztv";
        expect(actual).to.equal(expected);
    });
    it("Should decode with any kind of key with unique characters", () => {
        const actual = substitution.substitution("nvhhztv", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "message";
        expect(actual).to.equal(expected);
    });
    it("Should preserve spaces when decoding", () => {
        const actual = substitution.substitution("nb nvhhztv", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "my message";
        expect(actual).to.equal(expected);
    });
    it("Should preserve spaces when encoding", () => {
        const actual = substitution.substitution("my message", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "nb nvhhztv";
        expect(actual).to.equal(expected);
    });
    it("Should encode with any kind of key of unique characters", () => {
        const actual = substitution.substitution("nb nvhhztv", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "my message";
        expect(actual).to.equal(expected);
    });
    it("Should decode a message by using the given substitution alphabet", () => {
        const actual = substitution.substitution("nb nvhhztv", "zyxwvutsrqponmlkjihgfedcba");
        const expected = "my message";
        expect(actual).to.equal(expected);
    })
})
