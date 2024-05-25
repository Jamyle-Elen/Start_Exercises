// 1.Escrever um programa de computador que leia 10  números inteiros e, ao final, apresent a soma de  todos os números lidos;
// let numbers = [];

// for (let i = 0; i < 10; i++) {
//     let num = parseInt(prompt("Digite um número: "));
//     numbers.push(num);
// }

// let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
// alert(`Soma dos números.: ${sumNumbers}`);


// 2. Faça o mesmo que antes, porém, ao invés de ler 10 números, o programa deveráler e somar números até que o valor digitado seja zero ( 0 ).
let numbers = [];
let continued = true;

for(let i = 0; continued; i++) {
    let num = parseInt(prompt("Digite um número (utiize '0' para sair): "));

    while (num === "" || isNaN(num)) {
        alert("Valor inválido, digite um valor inteiro.");
        num = parseInt(prompt("Digite um número (utiize '0' para sair): "));
    }

    if (num === 0) {
        continued = false;
    } else {
        numbers.push(num);
    }
}

let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
alert(`Soma dos números: ${sumNumbers}`);

// 1.Escreva um programa que leia dois valores reais. Ambos valores deverão ser lidos até que o usuário digite um número no intervalo de 1 a 100.  Apresentar a soma dos dois valores lidos.


let num1 , num2;

for (let i = 1; ; i++) {
    let num = parseFloat(prompt("Digite o numero real no intervalor de 1 à 100: "));

    if (!isNaN(num) && num >= 1 && num <= 100) {
        if (i === 1) {
            numero1 = numero;
        } else {
            numero2 = numero;
            break;
        }
    } else {
        alert("Por favor, digite um número válido dentro do intervalo de 1 a 100.");
    }
}

let soma = numero1 + numero2;
console.log("A soma dos dois valores é:", soma);