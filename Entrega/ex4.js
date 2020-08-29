/*Crie uma função com as seguintes características:

A função deve receber 3 parâmetros.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
Se nenhum argumento for passado, retorne "não recebeu parâmetro"
*/

const readline = require('readline-sync')
const valor1 = parseInt(readline.question("Digite o primeiro valor: "))
const valor2 = parseInt(readline.question("Digite o segundo valor: "))
const valor3 = parseInt(readline.question("Digite o terceiro valor: "))

function valores(valora, valorb, valorc) {
    if (!valorb && !valorc)
        return valora

    if (valora && valorb && !valorc)
        return valora + valorb

    if (valora && valorb && valorc)
        return (valora + valorb) / valorc

    return "não recebeu parâmetro"
}
console.log(valores(valor1, valor2, valor3))