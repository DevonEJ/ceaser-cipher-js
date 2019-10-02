
// Import CeaserCipher class
const encoder = require("./encoder");
const fs = require("fs");

fs.readFile("./mssg.txt", "utf8")
    .then(dealWithSecret);

    
const dealWithSecret = secretMessage => {
    const myEncoder = new encoder.CeasarCipher();

    console.log(
      myEncoder.applyEncoding((message = secretMessage), (shift_length = 3))
    );
}