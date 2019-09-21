// Import CeaserCipher class
const encoder = require('./encoder');


// Instantiate Ceasar Cipher
const myEncoder = new encoder.CeasarCipher();


console.log(myEncoder.applyEncoding(message = `This is my top secret message.`, shift_length = 3))
