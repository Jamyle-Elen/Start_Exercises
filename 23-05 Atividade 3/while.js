// Soma entre os números digitados
// let numbers = [];

// for (let i = 0; i < 10; i++) {
//     let num = parseInt(prompt("Digite um número: "));
//     numbers.push(num);
// }

// let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
// alert(`Soma dos números.: ${sumNumbers}`);

//
let numbers = [];

for(let i = 0; i < 100; i++) {
    let num = parseInt(prompt("Digite um número: "));
    if (num === 0) {
        break;
    }
    numbers.push(num);
}

let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
alert(`Soma dos números: ${sumNumbers}`);