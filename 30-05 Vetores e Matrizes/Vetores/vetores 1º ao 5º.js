// 1.   Crie um programa que preencha automaticamente um vetor numérico com 7 números gerados aleatoriamente pelo computador e depois mostre os valores gerados na tela.
let numbers = [];
for (let i = 0; i < 7; i++) {
    let numRandom = Math.floor(Math.random() * 100) + 1;
    numbers.push(numRandom);
}
console.log(`Números aleatórios ${numbers}`);

// 2. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.
let names = [];
for (let i = 0; i < 7; i++) {
    let name = prompt(`Digite o nome da ${i +1}º pessoa: `);
    names.push(name);
}

console.log("Ordem inversa dos nomes: ");
for (let i = names.length - 1; i >=0; i--) {
    console.log(names[i]);
}

// 3. Escreva um programa que leia 15 números e guarde-os em um vetor. No final, mostre o vetor inteiro na tela e em seguida mostre em que posições foram digitados valores que são múltiplos de 10.
let numbers1 = [];
for (let i = 0; i < 15; i++) {
    let number1 = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numbers1.push(number1);
}
console.log(`Números digitados: ${numbers1}`);

console.log("Posições que são múltiplas de 10: ");
for (let i =0; i < numbers1.length; i++) {
    numbers1[i] % 10 === 0 ? console.log(`Valor ${numbers1[i]} na ${i}º posição`) : null;
}

// 4. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
let numbers2 = [];
for (let i = 0; i < 10; i++) {
    let number2 = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numbers2.push(number2);
}
console.log("Números pares e em que posições eles estão: ");
for (let i = 0; i < numbers2.length; i++) {
    numbers2[i] % 2 === 0 ? console.log(`${numbers2[i]}, ele ocupa a ${i}º posição`) : null;
}

// 5. Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um número (chave) e seu programa deve mostrar em que posições essa chave foi encontrada. Mostre também quantas vezes a chave foi sorteada.
let numbers3 = [];
for (let i = 0; i < 30; i++) {
    let numRandom = Math.floor(Math.random() * 15) + 1;
    numbers3.push(numRandom);
}
console.log(numbers3);

let num = parseInt(prompt("Digite um número: "));
let count  = 0;
for (let i = 0; i < numbers3.length; i++) {
    numbers3[i] === num ? console.log(`O número ${num} ocupa a ${i}º posição, ela foi sorteada `) : null;
        count++;
}

console.log(`O número ${num} foi encontrado ${count} vezes`);