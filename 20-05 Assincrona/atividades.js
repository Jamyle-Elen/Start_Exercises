// // Desconto dia das mulheres
// const sexo = prompt("Digite seu sexo M/F: ").toUpperCase();

// if (sexo !== "M" && sexo !== "F") {
//   console.log(`Sexo inválido: ${sexo}. Digite 'M' para masculino ou 'F' para feminino.`);
// }
// const nome = prompt("Digite seu nome: ");
// const valorCompra = parseFloat(prompt("Digite o valor total da sua compra: "));

// const desconto = sexo === "M" ? valorCompra * 0.05 : valorCompra * 0.13;
// const valorFinal = valorCompra - desconto;

// console.log(`${nome}, o valor da sua compra com desconto é de R$${valorFinal.toFixed(2)}.`);

// if (valorFinal !== valorCompra) {
//     console.log(`Parabéns, ${nome}, você recebeu um desconto de ${desconto.toFixed(2)}%!`);
// }

// Reajuste salarial
const genero = prompt("Digite o gênero do funcionário M/F: ").toUpperCase();

if (genero !== "M" && genero !== "F") {
  console.log(`Gênero inválido: ${genero}. Digite 'M' para masculino ou 'F' para feminino.`);
}

const salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário: "));
const tempoEmpresa = parseInt(prompt("Digite o tempo de empresa do funcionário (escreva em anos): "));

const reajuste = genero === "M"
  ? tempoEmpresa < 20 ? 0.03 : tempoEmpresa < 30 ? 0.13 : 0.25
  : tempoEmpresa < 15 ? 0.05 : tempoEmpresa < 20 ? 0.12 : 0.23;

const novoSalario = salarioAtual + (salarioAtual * reajuste);

console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);