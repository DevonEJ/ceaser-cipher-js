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
        

        console.log(`...Completed message encoding.`);

    }

}


const myEncoder = new CeasarCipherEncoder();


console.log(myEncoder.applyEncoding(`Hey!!`));




