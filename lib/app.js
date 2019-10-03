// Import CeaserCipher class
const encoder = require("./encoder");
const fs = require("fs");

// Retrieve secret messaage from file
const secretMessage = fs.readFileSync("./mssg.txt", "utf8");

// Instantiate Ceasar Cipher
const myEncoder = new encoder.CeasarCipher();

const encodedMessage = myEncoder.applyEncoding((message = secretMessage), (shift_length = 3));

console.log(`Encoded Message: ${encodedMessage}`);

console.log(`Decoded Message:`)
console.log(myEncoder.applyDecoder(message = encodedMessage, shift_length = 3));
