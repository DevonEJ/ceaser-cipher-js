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
      }
    }
  return mssg;
    }

  /**
   * Method uses the Ceasar cipher shift substitution method to return a decoded message in uppercase, when passed a
   * previously encoded message.
   * @param {string} message 
   * @param {number} shift_length 
   */  
  applyDecoder(message = '', shift_length = 3) {

    let shift = shift_length;
    let alphabet = this.alphabet;
    let cipherLetter;
    let letterIndex;
    let newIndex;

    for (let letter of message) {
      // If the letter is in the alphabet (e.g. not a number, space or punctuation mark) then decode it
      if (alphabet.includes(letter)) {

        // Get index of current letter
        letterIndex = alphabet.indexOf(letter);
        // console.log(`This is the encoded letter: ${letter}`);
        // console.log(`This is the encoded letter index: ${letterIndex}`);

        // If index is greater than/equal to shift (n) - there is no letter n letters after it - so start again at a
        if (letterIndex > ((alphabet.length - 1) - shift))  {

         // Get how far the encoded letter is from end of alphabet   
         let distanceFromZ = (alphabet.length - 1) - letterIndex;

         // Once reaching end of alphabet, start again at a and take the letter this many spaces from a 
         newIndex = (shift - 1) - distanceFromZ;
        //  console.log(`This is the calculated index for the original letter: ${newIndex}`);

         cipherLetter = alphabet[newIndex];
        //  console.log(`This is the cipher letter ${cipherLetter}`);

        }
        else {
          // Take the letter shift (n) letters after the current encoded letter
          cipherLetter = alphabet[letterIndex + shift];
          // console.log(`This is the new cipher letter for else path: ${cipherLetter}`);

        }
      }  
      // Replace original letter with the cipher letter
      message = this._replaceAll(message, letter, cipherLetter);
      }
    return message;
  }


    }


// TODO: Write decoder method
// TODO: Make the shift_length a property of the class that can be overwritten?

exports.CeasarCipher = CeasarCipher;
