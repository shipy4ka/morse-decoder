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
 
	let decodPhrase = [];
	let arrayWords = [];

	for (let i = 0; i < expr.length / 10; i++) {
		let oneSymbl = expr.slice(i * 10, i * 10 + 10);
		arrayWords.push(oneSymbl);
	}


	for (let j = 0; j < arrayWords.length; j++) {
		if (arrayWords[j] === "**********") {
			decodPhrase.push(' ');
		} else {
			arrayWords[j] = arrayWords[j].replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '');
			decodPhrase.push(MORSE_TABLE[arrayWords[j]]);
		}
	}
	return decodPhrase.join('');
  
// write your solution here
}

module.exports = {
    decode
}