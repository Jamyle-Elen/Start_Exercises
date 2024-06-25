// Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números.
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
        // pra manter 1 quando for 0
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

console.log(calculateFactorial(4));
console.log(calculateFactorial(2));
console.log(calculateFactorial(0));