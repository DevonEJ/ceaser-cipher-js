// Ceasar Cipher class defined
const chalk = require('chalk');

/**
 * CeaserCipher replicates action of a shift cipher, aka. Ceasar cipher.
 * @class
 * @function applyEncoding - Encodes and returns string message using the shift cipher.
 */
class CeasarCipher {
  /**
   * Constructor for the CeasarCipher class.
   * @constructor
   * @property {string[]} - Array of upper case letters of the alphabet.
   */
  constructor() {
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

  /** 
   * Method uses the Ceasar cipher shift substitution method to return an encoded message in uppercase.
   * @param {string} message - Message to be encoded.
   * @param {number} shift_length - Shift length for character substitution.
   * @return {string} ciphertext encoded message.
   * @example
   * applyEncoding(message = "Hi", shift_length = 2) => return: "EF".
   */
  applyEncoding(message = '', shift_length = 3) {

    let mssg = message.toUpperCase();
    let shift = shift_length;
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
      // If the letter is in the alphabet (e.g. not a number, space or punctuation mark) then encode it
      if (alphabet.includes(letter)) {

      // Get letter 3 letters before the letter used in the message
      cipherLetter = negIndexProxy[alphabet.indexOf(letter) - shift];

      // Replace original letter with the cipher letter
      mssg = mssg.replace(letter, cipherLetter);
      }
    }
    return mssg
  }

  applyDecoding (message =' ', shift_length = 3) {
    break
  }
}

// TODO: Write decoder method
// TODO: Make the shift_length a property of the class that can be overwritten?

exports.CeasarCipher = CeasarCipher;
