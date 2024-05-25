// Soma entre os números digitados
// let numbers = [];

// for (let i = 0; i < 10; i++) {
//     let num = parseInt(prompt("Digite um número: "));
//     numbers.push(num);
// }

// let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
// alert(`Soma dos números.: ${sumNumbers}`);

// Soma entre números digitados, adicionado condição de sair com o 0
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