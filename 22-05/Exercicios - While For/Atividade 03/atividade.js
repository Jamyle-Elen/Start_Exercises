// Ler numeros entre 100 e 2o0

console.log("Números ímpares entre 100 e 200:");
for (let i = 101; i <= 200; i += 2) {
    console.log(i);
}

// Notas alunos
let totalNotas = 0;
const numAlunos = 10;

for (let i = 1; i <= numAlunos; i++) {
    let nota1 = parseFloat(prompt(`Digite a primeira nota do aluno ${i}:`));
    let nota2 = parseFloat(prompt(`Digite a segunda nota do aluno ${i}:`));
    let media = (nota1 + nota2) / 2;
    totalNotas += media;
    console.log(`A média do aluno ${i} é: ${media}`);
}

let mediaTurma = totalNotas / numAlunos;
console.log(`A média da turma é: ${mediaTurma}`);

// Media dos numeros pares
let soma = 0;
let count = 0;

while (true) {
    let num = parseInt(prompt("Digite um número (0 para sair):"));
    if (num === 0) break;
    count += num % 2 === 0 ? 1 : 0;
    soma += num % 2 === 0 ? num : 0;
}

let media = count > 0 ? soma / count : 0;
console.log(count > 0 ? `A média dos números pares digitados é: ${media}` : "Nenhum número par foi digitado.");

// Min number Max number
let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;

while (true) {
    let num = parseInt(prompt("Digite um número (0 para sair):"));
    if (num === 0) break;
    maior = num > maior ? num : maior;
    menor = num < menor ? num : menor;
}

console.log(maior !== Number.MIN_SAFE_INTEGER && menor !== Number.MAX_SAFE_INTEGER ? `O maior número digitado é: ${maior}\nO menor número digitado é: ${menor}` : "Nenhum número foi digitado.");

// Sexo
let sexo;

do {
    sexo = prompt("Digite o sexo (M/F):").toUpperCase();
} while (sexo !== 'M' && sexo !== 'F');

console.log(`Sexo digitado: ${sexo}`);