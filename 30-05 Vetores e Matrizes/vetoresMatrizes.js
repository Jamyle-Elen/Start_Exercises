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
// let numbers = [];
// for (let i = 0; i < 15; i++) {
//     let number = parseInt(prompt(`Digite o ${i + 1}º número: `));
//     numbers.push(number);
// }
// console.log(`Números digitados: ${numbers}`);

// console.log("Posições que são múltiplas de 10: ");
// for (let i =0; i < numbers.length; i++) {
//     numbers[i] % 10 === 0 ? console.log(`Valor ${numbers[i]} na ${i}º posição`) : null;
// }

// 4. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
// let numbers = [];
// for (let i = 0; i < 10; i++) {
//     let number = parseInt(prompt(`Digite o ${i + 1}º número: `));
//     numbers.push(number);
// }
// console.log("Números pares e em que posições eles estão: ");
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] % 2 === 0 ? console.log(`${numbers[i]}, ele ocupa a ${i}º posição`) : null;
// }

// 5. Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e 15 sorteados pelo computador. Depois disso, peça para o usuário digitar um número (chave) e seu programa deve mostrar em que posições essa chave foi encontrada. Mostre também quantas vezes a chave foi sorteada.
let numbers = [];
for (let i = 0; i < 30; i++) {
    let numRandom = Math.floor(Math.random() * 15) + 1;
    numbers.push(numRandom);
}
console.log(numbers);

let num = parseInt(prompt("Digite um número: "));
let count  = 0;
for (let i = 0; i < numbers.length; i++) {
    numbers[i] === num ? console.log(`O número ${num} ocupa a ${i}º posição, ela foi sorteada `) : null;
        count++;
}

console.log(`O número ${num} foi encontrado ${count} vezes`);

/*  6. Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No final, mostre:              
    a) Qual é a média de idade das pessoas cadastradas
    b) Em quais posições temos pessoas com mais de 25 anos
    c) Qual foi a maior idade digitada (podem haver repetições)
    d) Em que posições digitamos a maior idade */
let ages = [];
for (let i = 0; i < 8; i++) {
    let age = parseInt(prompt(`Digite a ${i + 1}º idade: `));
    ages.push(age);
}

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

// Média das idades cadastradas
let average = (sum / ages.length).toFixed(0);
console.log(`A média das idades das pessoas cadastradas é: ${average}`);

// Idades maiores que 25
let ageOver25 = [];

for (let i = 0; i < ages.length; i++) {
    ages[i] > 25 ? ageOver25.push(i) && console.log(`As pessoas com mais de 25 anos estão nas posições: ${ageOver25.join("º, ")} `) : null;
}

for (let i = 0; i < ageOver25.length; i++) {
}

// Maior idade cadastrada e em que posição se encontra
let older = Math.max(...ages);
let olderPositions = [];

for (let i = 0; i < ages.length; i++) {
    ages[i] === older ? olderPositions.push(i) : null;
}
console.log(`A maior idade é ${older} e ela se encontra na ${olderPositions.join("º, ")} posição`);


/*  7. Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
    um vetor. No final, mostre:   
    a) Qual é a média da turma
    b) Quantos alunos estão acima da média da turma
    c) Qual foi a maior nota digitada
    d) Em que posições a maior nota aparece */
let grades = [];

for (let i = 0; i < 10; i++) {
    let grade = parseFloat(prompt(`Digite a nota do ${i + 1}º aluno:`));
    grades.push(grade);
}

let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
let average = sum / grades.length;
console.log(`A média da turma é: ${average.toFixed(2)}`);

let aboveAverage = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > average) {
        aboveAverage++;
    }
}
console.log(`Quantidade de alunos acima da média: ${aboveAverage}`);

let highestGrade = Math.max(...grades);
let highestGradePositions = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] === highestGrade) {
        highestGradePositions.push(i);
    }
}
console.log(`A maior nota é ${highestGrade} e ela se encontra nas posições: ${highestGradePositions.join("º, ")}`);
