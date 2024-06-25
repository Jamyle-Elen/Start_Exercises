// Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada.
function add(value, percent) {
    let calculation = value * (percent/100)
    return value + calculation
}

console.log(add(3, 8))