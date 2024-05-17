
// Soma de números inteiros
let valor1 = 2;
let valor2 = 4;
let soma = valor1 + valor2;
console.log(`A soma de ${valor1} + ${valor2} é igual a: ${soma}`);

// Média aluno
let n1 = 2;
let n2 = 3;

let media = (n1+n2) / 2;
console.log(`Suas notas foram ${n1} e ${n2}`);
console.log(`Sua média é: ${media}`);

// Dobro e terça parte do valor

let dobro = n1 * 2;
let tu = n1 / 3;
console.log(n1);
console.log(`O dobro desse valor é ${dobro}`);
console.log(`Sua terça parte é: ${tu}`);

// Área a ser pintada

let width = 4;
let height = 2;
let areaPintada = width * height;

console.log(`Altura ${height} metros`);
console.log(`Largura ${width} metros`);
console.log(`Área a ser pintaaa: ${areaPintada} metros`);
console.log(`São necessáros ${areaPintada/2} L de tinta`);

// Valor gasto em alugel de carro

let diariaAlugel = 90;
let valorPorKm = 0.20;
let kmPercorrido = 34;
let diasAlugado = 3;
let gastoTotal = ((diariaAlugel * diasAlugado) + (valorPorKm * kmPercorrido));

console.log(`Valor diária: ${diariaAlugel}`);
console.log(`Valor por KM: ${valorPorKm}`);
console.log(`Dias: ${diasAlugado}`);
console.log(`Você gastou R$ ${gastoTotal.toFixed(2)} com esse aluguel`);


// 6. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário. Sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.

let diasTrabalhados = 24;
let horasDia = 8;
let valorDia = 25;
let salario = (horasDia * valorDia) * diasTrabalhados;

console.log(`Você recebeu.: R$ ${salario.toFixed(2)}`);


