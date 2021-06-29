let caesar = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () =>{
    it("Should encode a string using a shift",() => {
        const expected = 'khoor';
        const actual = caesar.caesar('hello', 3);
        expect(actual).to.equal(expected);
    });
    it("Should ignore capital letters", () => {
        const actual = caesar.caesar("ABC", 1);
        const expected = "bcd";
        expect(actual).to.equal(expected);
    });
    it("Should leave spaces as is", () => {
        const actual = caesar.caesar("s b", 3);
        const expected = " ";
        expect(actual.charAt(1)).to.equal(expected);
    });
    it("Should leave special characters as is", () => {
        const actual = caesar.caesar("x !", 3);
        const expected = "!";
        expect(actual.charAt(2)).to.equal(expected);
    });
    it("Should return to beginning when going over 'z'", () => {
        const actual = caesar.caesar("Secret", 3);
        const expected = "vhfuhw";
        expect(actual).to.equal(expected);
    });
    it("Should account for negative shift, by going left when appropriate", () => {
        const actual= caesar.caesar("secret", 3);
        const expected = "vhfuhw";
        expect(actual).to.equal(expected);
    });
    it("Should return false if no shift value", () => {
        const actual = caesar.caesar("vhfuhw");
        expect(actual).to.be.false;
    });
    it("Should return false if shift is greater than 25", () => {
        const actual = caesar.caesar("vhfuhw", 26);
        expect(actual).to.be.false;
    });
    it("Should return false if shift amount is less than -25", () => {
        const actual = caesar.caesar("vhfuhw", -26);
        expect(actual).to.be.false;
    })
    it("Should return false if the shift is 0", () => {
        const actual = caesar.caesar("abc", 0,);
        expect(actual).to.be.false;
    })
    it("Should return decode message if input encode", () => {
        const actual = caesar.caesar("vhfuhw", 3, false);
        const expected = "secret";
        expect(actual).to.equal(expected);
    });
    it("should decode a message by shifting the letters in the opposite direction", () => {
        const actual = caesar.caesar("cde", -1, false);
        const expected = "def";
        expect(actual).to.equal(expected);
    });
})
