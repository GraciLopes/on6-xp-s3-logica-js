//2. Agora faça o contrário, um programa que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius

const readline = require('readline-sync')

const grau_Fahrenheit = parseFloat(readline.question("Digite a temperatura que deseja converter: "))

function conversaoCelsius() {
    return 5 * (grau_Fahrenheit - 32) / 9
}

console.log("A temperatura em Celsius é: " + conversaoCelsius(grau_Fahrenheit))