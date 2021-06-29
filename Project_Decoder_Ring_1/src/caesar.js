// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  function caesar(input, shift, encode = true) {
    let endMessage = "";
    if (!shift || shift >= 26 || shift == 0 || shift <= -26) return false;
    if (!encode) shift *= -1;
    for (let char of input) {
      let lowerChar = char.toLowerCase();
      if (alphabet.includes(lowerChar)) {
        let newPosition = alphabet.indexOf(lowerChar) + shift;
        if (newPosition > 25) {
          newPosition -= 26;
        } else if (newPosition < 0) {
          newPosition += 26;
        }
        endMessage += alphabet[newPosition];
      } else {
        endMessage += lowerChar;
      }
    }
    return endMessage;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
