// Import CeaserCipher class
const encoder = require('./encoder');
const fs = require('fs');

// Retrieve secret messaage from file
const secretMessage = fs.readFileSync("./mssg.txt", "utf8");


// Instantiate Ceasar Cipher
const myEncoder = new encoder.CeasarCipher();


console.log(myEncoder.applyEncoding(message = secretMessage, shift_length = 3))
