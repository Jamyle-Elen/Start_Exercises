// 1. Desenvolva um programa usando a estrutura “para” que mostre na tela a seguinte contagem:
for (let i = 0; i <= 40; i += 5) {
    console.log(i);
}
console.log("Acabou!");



// 2. Desenvolva um programa usando a estrutura “para” que mostre na tela a seguinte contagem:
for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}
console.log("Acabou!");


// 3. Escreva um programa que leia um número qualquer e mostre a tabuada desse número, usando a estrutura “para”.
let numero = parseInt(prompt("Digite um valor:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}



// 4. Faça um programa usando a estrutura “para” que leia um número inteiro positivo e mostre na tela uma contagem de 0 até o valor digitado:
let valor = parseInt(prompt("Digite um valor:"));

for (let i = 0; i <= valor; i++) {
    console.log(i);
}
console.log("FIM!");



// 5. Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura “para”. No final, mostre na tela:
let totalMulheres = 0;
let totalHomens100kg = 0;
let somaPesoMulheres = 0;
let maiorPesoHomens = 0;

for (let i = 0; i < 8; i++) {
    let sexo = prompt("Digite o sexo M/F: ").toUpperCase();
    let peso = parseFloat(prompt("Digite o peso:"));
    
    sexo === 'F' 
        ? (totalMulheres++, somaPesoMulheres += peso) 
        : sexo === 'M' && peso > 100 
        ? totalHomens100kg++ 
        : null;

    sexo === 'M' && peso > maiorPesoHomens 
        ? maiorPesoHomens = peso 
        : null;
}

let mediaPesoMulheres = totalMulheres > 0 ? (somaPesoMulheres / totalMulheres) : 0;

console.log(`Total de mulheres cadastradas: ${totalMulheres}`);
console.log(`Homens com mais de 100kg: ${totalHomens100kg}`);
console.log(`Média de peso das mulheres: ${mediaPesoMulheres.toFixed(2)} kg`);
console.log(`Maior peso entre os homens: ${maiorPesoHomens} kg`);


// 6. [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.
let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA:"));
let razao = parseInt(prompt("Digite a razão da PA:"));
let soma = 0;

for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    console.log(termo);
    soma += termo;
}
console.log(`Soma dos 10 primeiros termos: ${soma}`);

                   
// 7. [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci:
let a = 1, b = 1;
console.log(a);
console.log(b);

for (let i = 3; i <= 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}