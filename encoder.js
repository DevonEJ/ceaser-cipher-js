// Encoder applies the Ceasar Cipher to a message

class CeasarCipherEncoder {
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

    // Proxy is used to allow the use of negative array indexes in applyEncoding  
    const negIndexProxy = new Proxy(alphabet, {
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

        // TODO: Add exception handling for message characters that are not letters
        letter = letter.toUpperCase;

        // Get Index of the letter 3 letters before the letter used in the message     
        cipherLetterIndex = alphabet.indexOf(letter) - 3;

        // Replace the original message letter with the encoding letter
        console.log(negIndexProxy[cipherLetterIndex])
        //mssg = mssg.replace(letter, alphabet[cipherLetterIndex]);

        //console.log(mssg)
    }

    console.log(`...Completed message encoding.`);
  }
}




const myEncoder = new CeasarCipherEncoder();

let encodedMessage = myEncoder.applyEncoding(`This is my top secret message.`);
console.log(encodedMessage);




