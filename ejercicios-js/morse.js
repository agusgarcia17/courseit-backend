function morseCode(str) {

    var str1 = str.toString().toLowerCase()
    str2 = ''
 
    for (var i = 0; i < str1.length; i++) {

        switch (str1[i]) {

            case 'a':
                str2 += '.- '
                break;
            case 'b':
                str2 += '-... '
                break;
            case 'c':
                str2 += '-.-. '
                break;
            case 'd':
                str2 += '-.. '
                break;
            case 'e':
                str2 += '. '
                break;
            case 'f':
                str2 += '--. '
                break;
            case 'g':
                str2 += '--. '
                break;
            case 'h':
                str2 += '.... '
                break;
            case 'i':
                str2 += '.. '
                break;
            case 'j':
                str2 += '.--- '
                break;
            case 'k':
                str2 += '-.- '
                break;
            case 'l':
                str2 += '.-.. '
                break;
            case 'm':
                str2 += '-- '
                break;
            case 'n':
                str2 += '-. '
                break;
            case 'o':
                str2 += '--- '
                break;
            case 'p':
                str2 += '.--. '
                break;
            case 'q':
                str2 += '--.- '
                break;
            case 'r':
                str2 += '.-. '
                break;
            case 's':
                str2 += '... '
                break;
            case 't':
                str2 += '- '
                break;
            case 'u':
                str2 += '..- '
                break;
            case 'v':
                str2 += '...- '
                break;
            case 'w':
                str2 += '.-- '
                break;
            case 'x':
                str2 += '-..- '
                break;
            case 'y':
                str2 += '-.-- '
                break;
            case 'z':
                str2 += '--.. '
                break;
            case '1':
                str2 += '.---- '
                break;
            case '2':
                str2 += '..--- '
                break;
            case '3':
                str2 += '...-- '
                break;
            case '4':
                str2 += '....- '
                break;
            case '5':
                str2 += '..... '
                break;
            case '6':
                str2 += '-.... '
                break;
            case '7':
                str2 += '--... '
                break;
            case '8':
                str2 += '---.. '
                break;
            case '9':
                str2 += '----. '
                break;
            case '0':
                str2 += '----- '
                break;
            default:
                ' '
                break;

        }

    }
    return str2.trim()

}

  console.log(morseCode('hola123'))
//   module.exports = morseCode;

//   function morseCode(str) { 
  
//     var MORSE_CODE = {
//         '.-': 'a',
//         '-...': 'b',
//         '-.-.': 'c',
//         '-..': 'd',
//         '.': 'e',
//         '..-.': 'f',
//         '--.': 'g',
//         '....': 'h',
//         '..': 'i',
//         '.---': 'j',
//         '-.-': 'k',
//         '.-..': 'l',
//         '--': 'm',
//         '-.': 'n',
//         '---': 'o',
//         '.--.': 'p',
//         '--.-': 'q',
//         '.-.': 'r',
//         '...': 's',
//         '-': 't',
//         '..-': 'u',
//         '...-': 'v',
//         '.--': 'w',
//         '-..-': 'x',
//         '-.--': 'y',
//         '--..': 'z',
//         '.----': '1',
//         '..---': '2',
//         '...--': '3',
//         '....-': '4',
//         '.....': '5',
//         '-....': '6',
//         '--...': '7',
//         '---..': '8',
//         '----.': '9',
//         '-----': '0',
//         '|': ' '
//     };
  
    
//      var words = (str).split('  ');
//     var letters = words.map((w) => w.split(' '));
//     var decoded = [];
  
//     for(var i = 0; i < letters.length; i++){
//       decoded[i] = [];
//       for(var x = 0; x < letters[i].length; x++){
//           if(MORSE_CODE[letters[i][x]]){
//               decoded[i].push( MORSE_CODE[letters[i][x]] );
//           }
//       }
//     }
  
//     return decoded.map(arr => arr.join('')).join(' '); 
// }

//     module.exports = morseCode;