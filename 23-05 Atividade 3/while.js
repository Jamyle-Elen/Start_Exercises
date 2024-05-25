// Soma entre os números digitados
let numbers = [];

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Digite um número:"));
    numbers.push(num);
}

let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);

alert(`Soma dos números.: ${sumNumbers}`);