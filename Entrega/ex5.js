//4. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.


const readline = require('readline-sync')
let valor = parseInt(readline.question("Digite um valor: "))
let soma = 0

for (let i = 0; i <= valor; i++) {
    soma = soma + i
}
console.log(soma)