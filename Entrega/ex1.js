//1. Faça um programa que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const readline = require('readline-sync')

const grau_celsius = parseFloat(readline.question("Digite a temperatura que deseja converter: "))

function conversaoFahrenheit(grau_celsius) {
    return grau_celsius / 5 * 9 + 32
}

console.log("A temperatura em Fahrenheit é: " + conversaoFahrenheit(grau_celsius))