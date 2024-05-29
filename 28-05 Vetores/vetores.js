// Faça um programa que preencha automaticamente um vetor numérico com 8 posições, conforme abaixo:w
let vetor = new Array(8).fill(999);
console.log("Valores: ");
vetor.forEach((valor, indice) => {
    console.log(`${indice} -> ${valor}`);
});

// Crie um programa que preencha automaticamente (usando lógica,não apenas atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
let vetor1 = [];
for (let i = 0; i < 10; i++) {
    vetor.push((i + 1) *5);
}

console.log("Valores: ");
for (let i = 0; i < vetor1.length; i++) {
    console.log(`${i} -> ${vetor1[i]}`);
    
}

// Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
let vetor3 = [];
for (let i = 9; i >= 0; i--) {
    vetor3.push(i);
}
console.log("Valores: ");
for (let i = 0; i < vetor3.length; i++) {
    console.log(i + " => " + vetor3[i]);
}


// Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo: (ficar alternando entre impar e par)
let vetor4 = [];
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        vetor.push(5);
    } else {
        vetor.push(3);
    }
}

console.log("Valores do vetor:");
for (let i = 0; i < vetor.length; i++) {
    console.log(i + " => " + vetor[i]);
}


// Crie um programa que preencha automaticamente (usando lógica, não apenas  atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequencia Fibonacci;
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}

    let vetorFibonacci = fibonacci(15);
    console.log("Valores Fibonacci: ");
    for (let i = 0; i < vetorFibonacci.length; i++) {
    console.log(i + " => " + vetorFibonacci[i]);
}