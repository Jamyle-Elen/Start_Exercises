// 1.   Crie um programa que preencha automaticamente um vetor numérico com 7 números gerados aleatoriamente pelo computador e depois mostre os valores gerados na tela.
// let numbers = [];
// for (let i = 0; i < 7; i++) {
//     let numRandom = Math.floor(Math.random() * 100) + 1;
//     numbers.push(numRandom);
// }
// console.log(`Números aleatórios ${numbers}`);

// 2. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
// let names = [];
// for (let i = 0; i < 7; i++) {
//     let name = prompt(`Digite o nome da ${i +1}º pessoa: `);
//     names.push(name);
// }

// console.log("Ordem inversa dos nomes: ");
// for (let i = names.length - 1; i >=0; i--) {
//     console.log(names[i]);
// }

// 3. Escreva um programa que leia 15 números e guarde-os em um vetor. No final, mostre o vetor inteiro na tela e em seguida mostre em que posições foram digitados valores que são múltiplos de 10.
let numbers = [];
for (let i = 0; i < 15; i++) {
    let number = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numbers.push(number);
}
console.log(`Números digitados: ${numbers}`);

console.log("Posições que são múltiplas de 10: ");
for (let i =0; i < numbers.length; i++) {
    numbers[i] % 10 === 0 ? console.log(`Valor ${numbers[i]} na ${i}º posição`) : null;
}