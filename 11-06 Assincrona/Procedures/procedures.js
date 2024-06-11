// 1. Algoritmo para exibir os 10 primeiros elementos de uma série de Fibonacci usando procedimentos com passagem de parâmetros por referência.
function fibonacciSequence(sequence, count) {
    sequence[0] = 0;
    sequence[1] = 1;

    for (let i = 2; i < count; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
}

let fibonacciNumbers = new Array(10);
fibonacciSequence(fibonacciNumbers, 10);
console.log(fibonacciNumbers);

// 2. Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses valores para um procedimento Maior() que vai verificar qual deles é o maior e mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem informando essa característica.
function Maior(a, b) {
    if (a > b) {
        console.log(`O maior: ${a}`);
    } else if (b > a) {
        console.log(`O maior: ${b}`);
    } else {
        console.log("Os valores são iguais.");
    }
}

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
Maior(valor1, valor2);
