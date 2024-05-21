// IMC = peso / (altura * altura)

const peso = parseFloat(prompt("Digite seu peso: "));
const altura = parseFloat(prompt("Digite sua altura: "));
const imc = peso / (altura * altura);

let resultadoImc = imc;

if (imc < 16) {
    resultadoImc = "Magreza grave";
  } else if (imc >= 16 && imc < 17) {
    resultadoImc = "Magreza moderada";
  } else if (imc >= 17 && imc < 18.5) {
    resultadoImc = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    resultadoImc = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    resultadoImc = "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    resultadoImc = "Obesidade grau I";
  } else if (imc >= 35 && imc < 40) {
    resultadoImc = "Obesidade grau II";
  } else {
    resultadoImc = "Obesidade grau III";
}
    console.log(`Seu imc é: ${imc.toFixed(1)}`);
    console.log(`Resultado: ${resultadoImc.toFixed(1)}`);