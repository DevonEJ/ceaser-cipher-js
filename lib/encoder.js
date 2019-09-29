// Ceasar Cipher class defined


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

  _replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  };

  /** 
   * Method uses the Ceasar cipher shift substitution method to return an encoded message in uppercase.
   * @param {string} message - Message to be encoded.
   * @param {number} shift_length - Shift length for letter substitution.
   * @return {string} ciphertext encoded message.
   * @example
   * applyEncoding(message = "Hi", shift_length = 2) => return: "EF".
   */
  applyEncoding(message = '', shift_length = 3) {

    let mssg = message.toUpperCase();
    let shift = shift_length;
    let alphabet = this.alphabet;
    let cipherLetter;
    let letterIndex;
    let absIndex;


    for (let letter of mssg) {
      // If the letter is in the alphabet (e.g. not a number, space or punctuation mark) then encode it
      if (alphabet.includes(letter)) {

        // Get index of current letter
        letterIndex = alphabet.indexOf(letter);

          // If index is less than/equal to shift (n) - there is no letter n letters before it - so start again at Z
          if (letterIndex <= shift) {

            // Get the absolute value of the letter index - this will be a negative number
            absIndex = Math.abs(letterIndex);

            // Work backwards from Z to get the shifted letter
            cipherLetter = alphabet[((alphabet.length - 1) - absIndex)];
          }
          // Else if index is greater than the shift (n) - take the letter n letters before it
          else {
            cipherLetter = alphabet[(alphabet.indexOf(letter) - shift)];
          }
      // Replace original letter with the cipher letter
      mssg = this._replaceAll(mssg, letter, cipherLetter);
      //mssg = mssg.replace(letter, cipherLetter);
      }
    }
  return mssg;
    }
  }


// TODO: Write decoder method
// TODO: Make the shift_length a property of the class that can be overwritten?

exports.CeasarCipher = CeasarCipher;
