// Funções aninhadas

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}
// função aninhada
function calcular(a, b, operacao) { //dois numeros e um simbolo
    if (operacao === '+') { //teste lógico retrona true ou false
       return a + b
    } else if (operacao === '-') {
        return subtrair(a, b)
    } else if (operacao === '*') {
        return multiplicar(a, b)
    } else if (operacao === '/') {
        return dividir(a, b)
    }
}

function calcular2(a, b, operacao) {
    switch (operacao) {
        case '+': // se é exatamente o mesmo valor
            return somar(a, b)
        case '-': // ----> x >= 5
            return subtrair(a, b)
        case '*':
            return multiplicar(a, b)
        case '/':
            return dividir(a, b)
        default: //qualquer coisa que não foi definida nos cases
            return 'Operação inválida'
    }
}

// função de callback
function exibirNoConsole(a, b, callback) {
    console.log(callback(a, b)) 
}


let funcaoDefinida = function (a, b) {
    return a + b
}


let funcaoArrow = (a, b) =>  console.log(a + b) 
// arrow function de uma única linha não precisa de chaves

let funcaoArrow3 = a => console.log(a) 
// arrow function de uma única linha não precisa de chaves e para um parametro apenas

let funcaoArrow2 = (a, b) => {
    let resultado = a + b
    console.log(resultado)
    return resultado
}
// arrow function de multiplas linhas precisam de chaves e return
 

// let resultado = calcular2(1, 2, '+')
// console.log(resultado + " resultado da função calcular2")

// let resultado2 = funcaoArrow(1, 2)
// console.log(resultado2 + " resultado da função funcaoArrow")


// métodos para array que precisam de callback-> map, filter, reduce, forEach
let arrayNumerico = [1, 2, 3, 4, 5]
let arrayFrutas = ['laranja', 'abacaxi', 'manga']

// forEach
// vai aplicar uma função a cada elemento do array
// não retorna nada
console.log(arrayNumerico)
arrayNumerico.forEach(item => console.log(item*10));

console.log(arrayFrutas)
arrayFrutas.forEach((item) => console.log(item))


let precos = [150, 250, 350, 450, 550]

// map
// vai aplicar uma função a cada elemento do array
// retorna um novo array
let novosPrecos = precos.map(item => item + 2.50)
console.log(precos)
console.log(novosPrecos)

