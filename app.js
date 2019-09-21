// Import CeaserCipher class
const encoder = require('./encoder');


// Instantiate Ceasar Cipher
const myEncoder = new encoder.CeasarCipher();


console.log(myEncoder.applyEncoding(`This is my top secret message.`, 3))
