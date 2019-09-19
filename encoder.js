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
      "T"
    ];
  }

  applyEncoding(message) {
    console.log(`Beginning message encoding...`);

    let mssg = message;
    let letter;
    let cipherLetterIndex;
    let alphabet = this.alphabet;

    for (letter of mssg) {
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

      // TODO: Add exception handling for message characters that are not letters
      letter = letter.toUpperCase;

      // Get Index of the letter 3 letters before the letter used in the message
      cipherLetterIndex = alphabet.indexOf(letter) - 3;

      // Replace the original message letter with the encoding letter
      console.log(negIndexProxy[cipherLetterIndex]);

      // TODO: Change to only print the fully encoded string - don't print mssg at each run of the loop
      mssg = mssg.replace(letter, alphabet[cipherLetterIndex]);

      console.log(chalk.red(mssg));
    }

    console.log(`...Completed message encoding.`);
  }
}

const myEncoder = new CeasarCipher();

let encodedMessage = myEncoder.applyEncoding(`This is my top secret message.`);
console.log(encodedMessage);
