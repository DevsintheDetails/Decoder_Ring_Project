let polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
    it("Should encode a message by translating each letter to number pairs", () => {
        const expected = "23513434112251";
        const actual = polybius.polybius("message");
        expect(actual).to.equal(expected);
    });
    it("Should translate both 'i' and 'j' to 42", () => {
        const expected = "42421551";
        const actual = polybius.polybius("jive");
        expect(actual).to.equal(expected);
    });
    it("Should leave spaces as is when encoding", () => {
        const expected = "345131245144 23513434112251";
        const actual = polybius.polybius("secret message");
        expect(actual).to.equal(expected);
    });
    it("Should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "message";
        const actual = polybius.polybius("23513434112251", false);
        expect(actual).to.equal(expected);
    });
    it("Should return false if the length of all numbers is odd", () => {
        const actual = polybius.polybius("424215513", false);
        expect(actual).to.equal(false);
    });
    it("Should leave space as is when decoding", () => {
        const expected = "secret message";
        const actual = polybius.polybius("345131245144 23513434112251", false);
        expect(actual).to.equal(expected);
    })
})