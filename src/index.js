const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let decodedString = '';
    for (let i = 0; i < expr.length; i+=10) {
        let char1 = expr.slice(i, i + 10);
        decodedString += decodeOneCharacter(char1)
    }
    return decodedString;
}


function decodeOneCharacter (char) {
    if (char == "**********") return " ";    
    let trimmedChar = char.split('00').join('');
    newChar = translateFromZeroesAndOnesToDotsAndDashes(trimmedChar);
    let decodedChar = MORSE_TABLE[newChar];
    return decodedChar;
}

// 11 -> "-", 10-> ".", "1011" -> ".-"
function translateFromZeroesAndOnesToDotsAndDashes (char) {
    let translatedChar = "";
    for (let i = 0; i < char.length; i+=2) {
        let dividedOnTwoSymbols = char.slice(i, i + 2);
        if (dividedOnTwoSymbols == "11") translatedChar += "-"
        if (dividedOnTwoSymbols == "10") translatedChar += "."
    }
    return translatedChar;
}

module.exports = {
    decode
}
