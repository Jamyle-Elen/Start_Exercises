// 1. Algoritmo para criar uma série de Fibonacci utilizando uma função com passagem de parâmetros por referência.
function generateFibonacci(sequence, count) {
    sequence[0] = 0;
    sequence[1] = 1;

    for (let i = 2; i < count; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
}
let fibonacciSequence = new Array(10);
generateFibonacci(fibonacciSequence, 10);
console.log(fibonacciSequence);

// 2. Crie um programa que tenha uma função SuperSomador(), que vai receber dois números como parâmetro e depois vai retornar a soma de todos os valores no intervalo entre os valores recebidos.
function SuperSomador(early, last) {
    let sum = 0;

    if (early > last) {
        [early, last] = [last, early];
    }

    for (let i = early; i <= last; i++) {
        sum += i;
    }
    return sum;
}

console.log(SuperSomador(1, 6));
console.log(SuperSomador(15, 19));