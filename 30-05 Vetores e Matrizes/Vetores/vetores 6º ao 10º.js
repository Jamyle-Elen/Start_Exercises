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
    ages[i] > 25 ? ageOver25.push(i) && console.log(`As pessoas com mais de 25 anos estão nas posições: ${ageOver25.join("º, ")}º `) : null;
}

for (let i = 0; i < ageOver25.length; i++) {
}

// Maior idade cadastrada e em que posição se encontra
let older = Math.max(...ages);
let olderPositions = [];

for (let i = 0; i < ages.length; i++) {
    ages[i] === older ? olderPositions.push(i) : null;
}
console.log(`A maior idade é ${older} e ela se encontra na ${olderPositions.join("º, ")}º posição`);


// 7. Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
//     um vetor. No final, mostre:   
//     a) Qual é a média da turma
//     b) Quantos alunos estão acima da média da turma
//     c) Qual foi a maior nota digitada
//     d) Em que posições a maior nota aparece
let grades = [];

for (let i = 0; i < 10; i++) {
    let grade = parseFloat(prompt(`Digite a nota do ${i + 1}º aluno:`));
    grades.push(grade);
}

let sum1 = 0;
for (let i = 0; i < grades.length; i++) {
    sum1 += grades[i];
}
let average1 = sum1 / grades.length;
console.log(`A média da turma é: ${average1.toFixed(1)}`);

let aboveAverage = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > average1) {
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
console.log(`A maior nota é ${highestGrade} e ela se encontra nas posições: ${highestGradePositions.join("º, ")}º`);

// 8. [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
let numbers = [];
for (let i = 0; i < 20; i++) {
    let numRandom = Math.floor(Math.random() * 99);
    numbers.push(numRandom);
}
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(`Números em ordem crescente: `);
console.log(numbers);

//  9. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade.
let names1 = [];
let ages1 = [];

for (let i = 0; i < 9; i++) {
    let name = prompt(`Digite o nome da ${i + 1}º pessoa: `);
    let age = parseInt(prompt(`Digite a idade da ${i + 1}º pessoa: `));
    names1.push(name);
    ages1.push(age);
}

console.log("Dados das pessoas de menores: ");
for (let i = 0; i < names1.length; i++) {
    ages1[i] < 18 ? console.log(`Nome: ${names1[i]}, Idade: ${ages1[i]}`) : null;
}

// 10. Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e guarde esses dados em três vetores. No final, mostre uma listagem contendo apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.
let names2 = [];
let sexes = [];
let wages = [];

for (let i = 0; i < 2; i++) {
    let name = prompt(`Digite o nome do ${i + 1}º funcionário: `);
    let sex;
    
    while (true) {
        sex = prompt(`Digite o sexo do ${i + 1}º funcionário (M/F): `).toUpperCase();
        if (sex === "F" || sex === "M") {
            break;
        } else {
            alert("Sexo inválido. Digite 'M' ou 'F'.");
        }
    }

    let wage = parseInt(prompt(`Digite o salário do ${i + 1}º funcionário: `));
    names2.push(name);
    sexes.push(sex);
    wages.push(wage);
}

console.log("Dados de funcionárias que ganham mais de R$ 5.000,00: ");
for (let i = 0; i < names2.length; i++) {
    sexes[i] === "F" && wages[i] >= 5000 ? console.log(`Nome: ${names2[i]}, Sexo: ${sexes[i]}, Salário: R$ ${wages[i]}`) : null;
}