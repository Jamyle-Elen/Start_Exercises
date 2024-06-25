// Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da mesma forma da esquerda para a direita e vice-versa). Retorne true se for um palíndromo e false se não for.
function isPalindrome(word) {
    word = word.toLowerCase().replace(/\s/g, '');

    let reversedWord = word.split('').reverse().join('');

    return word === reversedWord;
}

console.log(isPalindrome('sopa'));
console.log(isPalindrome('rambuta'));
console.log(isPalindrome('ovo'));