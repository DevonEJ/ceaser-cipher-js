// Ceasar Cipher class defined
const chalk = require('chalk');

class CeasarCipher {
  constructor(message) {
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
  }

  applyEncoding(message) {

    let mssg = message.toUpperCase();
    let letter;
    let cipherLetter;
    let alphabet = this.alphabet;

    // Proxy is used to allow the use of negative array indexes in applyEncoding
    let negIndexProxy = new Proxy(alphabet, {
      get(targetLetter, prop) {
        if (!isNaN(prop)) {
          prop = parseInt(prop, 10);
          if (prop < 0) {
            prop += targetLetter.length;
          }
        }
        return targetLetter[prop];
      }
    });

    for (letter of mssg) {
      // If 
      if (alphabet.includes(letter)) {
        // TODO: Add exception handling for message characters that are not letters

      // Get letter 3 letters before the letter used in the message
      cipherLetter = negIndexProxy[alphabet.indexOf(letter) - 3];

      // Replace original letter with the cipher letter
      mssg = mssg.replace(letter, cipherLetter);
      }
    }
    //console.log(`Encoded Message; ${chalk.red(mssg)}`);
    return mssg
  }
}

exports.CeasarCipher = CeasarCipher;
