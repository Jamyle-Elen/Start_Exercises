// 1) Faça um algoritmo que leia 9 uma matriz 3x3. Posteriormente, percorra esta matriz e imprima somente os números que são pares.
let matrix1 = [];
for (let i = 0; i < 3; i++) {
    matrix1[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix1[i][j] = parseInt(prompt(`Digite o número para a posição [${i + 1}][${j + 1}]: `));
    }
}

console.log("Números pares na matriz: ");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (matrix1[i][j] % 2 === 0) {
            console.log(matrix1[i][j]);
        }
    }
}

// 2) Faça um algoritmo que leia uma matriz 2x3 e verifique se a matriz possui algum número repetido. Informe "Possui" ou "Não Possui" ao final do algoritmo.
let matrix2 = [];
let verifiedNumbers = {};
let repeatingNumbers = false;

for (let i = 0; i < 2; i++) {
    matrix2[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix2[i][j] = parseInt(prompt(`Digite o número para a posição [${i + 1}][${j + 1}]: `));
        if (verifiedNumbers[matrix2[i][j]]) {
            repeatingNumbers = true;
        } else {
            verifiedNumbers[matrix2[i][j]] = true;
        }
    }
}

console.log(repeatingNumbers ? "Possui" : "Não Possui");

// 3) Faça um algoritmo que possua duas matrizes 4x4 de números inteiros. Posteriormente, imprima somente os números que estão nas duas matrizes.
let matrix3A = [];
let matrix3B = [];
let numbersMatrix3A = {};

for (let i = 0; i < 4; i++) {
    matrix3A[i] = [];
    for (let j = 0; j < 4; j++) {
        matrix3A[i][j] = parseInt(prompt(`Digite o número para a matriz A, posição [${i + 1}][${j + 1}]: `));
        numbersMatrix3A[matrix3A[i][j]] = true;
    }
}

console.log("Números para a matriz B");
for (let i = 0; i < 4; i++) {
    matrix3B[i] = [];
    for (let j = 0; j < 4; j++) {
        matrix3B[i][j] = parseInt(prompt(`Digite o número para a matriz B, posição [${i + 1}][${j + 1}]: `));
    }
}

console.log("Números que estão nas duas matrizes:");
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (numbersMatrix3A[matrix3B[i][j]]) {
            console.log(matrix3B[i][j]);
        }
    }
}

// 4) Faça um algoritmo que leia uma matriz 3x3 e imprima esta matriz ordenada de forma crescente.
let matrix4 = [];
let numbers = [];

for (let i = 0; i < 3; i++) {
    matrix4[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix4[i][j] = parseInt(prompt(`Digite o número para a posição [${i + 1}][${j + 1}]: `));
        numbers.push(matrix4[i][j]);
    }
}

numbers.sort((a, b) => a - b);

console.log("Matriz na forma crescente:");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrix4[i][j] = numbers[i * 3 + j];
        console.log(matrix4[i][j]);
    }
}