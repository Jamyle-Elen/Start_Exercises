// Velocidade de um carro - 1
let velocidade = parseInt(prompt("Velocidade do carro:"));
let valorMulta = 5;
let limiteVelocidade = 80;

if (velocidade > limiteVelocidade) {
    console.log("Você ultrapassou o limite permitido. Você foi multado!");
    let velocidadeUltrapassada = velocidade - limiteVelocidade;
    let multa = velocidadeUltrapassada * valorMulta;
    setTimeout(function() {
        console.log("Calculando multa...");
    }, 1000);
    setTimeout(function() {
        console.log(`Valor a ser pago: R$ ${multa.toFixed(2)}`);
    }, 2000);

} else {
}

// Calcular idade - 2
let ano = parseInt(prompt("Que ano você nasceu?"));

setTimeout(function() {
    console.log("Verificando sua idade...");
    if (ano >= 2007 && ano <= 2008) {
    console.log("Não é obrigatório, mas você pode votar!");
} else if (ano <= 2006) {
    console.log("Você já pode votar!");
} else if (ano > 2007) {
    console.log("Você ainda não pode votar.");
}
}, 2000);

// Aproveitamento de notas - 3
let n1 = parseInt(prompt("Digite sua priemira nota:"));
let n2 = parseInt(prompt("Digite sua segunda nota:"));
let media = (n1 + n2) / 2;

console.log(`Média: ${media.toFixed(1)}`);
if (media >= 7.0) {
    console.log("Ótimo, você teve um bom aproveitamento!");
}else {
    console.log("Você não teve um bom aproveitamento!");
}

// Impar ou Par - 4
let num = parseInt(prompt("Digite o primeiro número:"));

if (num % 2 === 0) {
    console.log(`Par`);
} else if (num % 2 === 1) {
    console.log(`Ímpar`);
} else {
    console.log("Digite um número válido!");
}

// Verifique se o ano é bissexto - 5
let ano = parseInt(prompt("Digite um ano:"));
let anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

if (anoBissexto) {
    console.log(`${ano} é ano bissexto!`);
} else {
    console.log(`${ano} não é ano bissexto`);
}

// [DESAFIO] Segmentos do triângulo - 6
let seg1 = parseInt(prompt("Primeiro segmento:"));
let seg2 = parseInt(prompt("Segundo segmento:"));
let seg3 = parseInt(prompt("Terceiro segmento:"));

let formamTriangulo = (seg1 + seg2 > seg3) && (seg1 + seg3 > seg2) && (seg2 + seg3 > seg1);

if (formamTriangulo) {
    console.log("Pode formar um triângulo");
} else {
    console.log("Não pode formar um triângulo");
}

// Lendo números inteiros
let n1 = parseInt(prompt("Digite um número:"));
let n2 = parseInt(prompt("Digite outro número:"));

if (n1 > n2) {
    console.log("O primeiro valor é maior");
} else if (n1 < n2) {
    console.log("O segundo valor é maior");
} else {
    console.log("Não existe valor maior, os dois são iguais")
}

// Media do aluno - 7
let n1 = parseInt(prompt("Digite sua primeira nota:"));
let n2 = parseInt(prompt("Digite sua segunda nota:"));
let media = ((n1 + n2) / 2).toFixed(1);

if (media <= 4.9) {
    console.log("REPROVADO");
} else if (media >= 5.0 && media <= 6.9) {
    console.log("RECUPERAÇÃO");
} else if (media >= 7.0) {
    console.log("APROVADO");
} else {
    console.log("Digite um número válido!")
}

// Calculando terreno - 8
let l = parseInt(prompt("Digite a largura do terreno:"));
let c = parseInt(prompt("Digite a comprimento do terreno:"));
let area = l * c;

console.log(`Área: ${area}m²`);
if (area < 100) {
    console.log("TERRENO POPULAR");
} else if (area >= 100 && area <= 500) {
    console.log("TERRENO MASTER");
} else {
    console.log("TERRENO VIP");
}


// [DESAFIO] Segmentos do triângulo - 9
let seg1 = parseInt(prompt("Primeiro segmento:"));
let seg2 = parseInt(prompt("Segundo segmento:"));
let seg3 = parseInt(prompt("Terceiro segmento:"));

let formamTriangulo = (seg1 + seg2 > seg3) && (seg1 + seg3 > seg2) && (seg2 + seg3 > seg1);

if (formamTriangulo) {
    console.log("Pode formar um triângulo");
    if (seg1 === seg2 && seg2 === seg3) {
        console.log("EQUILÁTERO");
    } else if (seg1 === seg2 || seg1 === seg3 || seg2 === seg3) {
        console.log("ISÓSCELES");
    } else {
        console.log("ESCALENO");
    }
} else {
    console.log("Não pode formar um triângulo");
}