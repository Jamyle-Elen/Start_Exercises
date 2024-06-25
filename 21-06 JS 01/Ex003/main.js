// Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números.
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    return average;
}

const box1 = [4, 16, 25, 36, 49];
const box2 = [4, 44, 444];

console.log(calculateAverage(box1));
console.log(calculateAverage(box2));
