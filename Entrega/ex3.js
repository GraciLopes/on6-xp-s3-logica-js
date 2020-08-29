//3. Faça um programa que receba um valor em metros e chame uma função que converta em milímetros.

const readline = require('readline-sync')

const metros = parseFloat(readline.question("Digite a medida para a conversão: "))

function conversaoMetros() {
    return metros * 1000
}

console.log("Medida convertida em milimetros: " + conversaoMetros(metros))