// Implemente uma função que receba um número como parâmetro e retorne sua representação binária. Utilize essa função para converter diferentes números em binário.
function stringToBinary(string) {
    let binaryString = '';
    for (let i = 0; i < string.length; i++) {
        let binaryChar = string[i].charCodeAt(0).toString(2);
        binaryString += binaryChar.padStart(8, '0');
    }
    return binaryString;
}

let string = 'Jamyle Elen';
let binary = stringToBinary(string);
console.log(binary);