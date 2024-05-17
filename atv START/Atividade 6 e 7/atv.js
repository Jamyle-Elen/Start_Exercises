// 6. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário. Sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

let diasTrabalhados = 24;
let horasDia = 8;
let valorDia = 25;
let salario = (horasDia * valorDia) * diasTrabalhados;

console.log(`Você recebeu.: R$ ${salario.toFixed(2)}`);

// 7. [DESAFIO]
// Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros
// fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro.
// Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

let dailyCigarettes = 20;
let years = 14;
let timeCigarette = 10;

let totalCigarettes = dailyCigarettes * years * 365;
let totalTime = totalCigarettes * timeCigarette;
let lostDay = totalTime / (24 * 60);

console.log(`Um fumante perdeu ${lostDay.toFixed(0)} dias de sua vida preciosa.`)
