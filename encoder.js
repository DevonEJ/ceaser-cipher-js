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
    console.log(`Beginning message encoding...`);

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

      // TODO: Add if statment for when value of letter is empty string


      // TODO: Add exception handling for message characters that are not letters

      // Get letter 3 letters before the letter used in the message
      cipherLetter = negIndexProxy[alphabet.indexOf(letter) - 3];

      console.log(`This is cipherLetterIndex ${cipherLetter}`)
      console.log(`This is the letter to be replaced; ${letter}`)

      // TODO: Change to only print the fully encoded string - don't print mssg at each run of the loop
      mssg = mssg.replace(letter, cipherLetter);

      console.log(chalk.red(mssg));
    }

    console.log(`...Completed message encoding.`);
  }
}

const myEncoder = new CeasarCipher();

let encodedMessage = myEncoder.applyEncoding(`This is my top secret message.`);
console.log(encodedMessage);
