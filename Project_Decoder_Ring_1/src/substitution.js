// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  
  function substitution(input, alphabet, encode = true) {
    let newInput = input.toLowerCase();
  let real = "abcdefghijklmnopqrstuvwxyz";
  let message = "";
  
  if (!alphabet || alphabet.length !== 26) return false;
    for(let i = 0; i < alphabet.length; i++)
    for(let j = i + 1; j < alphabet.length; j++)
    if(alphabet[i] == alphabet[j])
    return false;
    if(encode) {
      for(let char of newInput) {
        if(char == " ") {
          message += char;
          continue;
        }
        for(let letter of real) {
          if(char == letter){
            let x =(real.indexOf(char));
            message +=(alphabet.charAt(x));
        }
      }
    }
    return message;
  }
  if(!encode) {
    for(let char of newInput) {
      if(char == " ") {
        message += char;
        continue;
      }
      for(let letter of alphabet) {
        if(char == letter) {
          let x = alphabet.indexOf(char);
          message += real.charAt(x);
        }
      }
    }
    return message;
  }
  }
  return {
    substitution,
  };
  })();
module.exports = { substitution: substitutionModule.substitution };