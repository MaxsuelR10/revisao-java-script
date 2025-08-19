/* 
Crie um programa que receba dois números e devolva 
como resultado a soma, subtração a multiplicação
e a divisão do primeiro pelo segundo número.
*/

let entrada = require('prompt-sync')();

console.log('Calculadora simples')

let n1 = entrada('Digite o 1º número: ');
let n2 = entrada('Digite o 2º número: ');

let soma = parseInt(n1) + parseInt(n2);

let sub = parseInt(n1) - parseInt(n2);

let mult = parseInt(n1) * parseInt(n2);

let div = parseInt(n1) / parseInt(n2);

let rest = parseInt(n1) % parseInt(n2);


 console.log('Resultados dos cálculos.');

console.log(`Adição ${n1} + ${n2} = ${soma}`);
console.log(`Subtração ${n1} - ${n2} = ${sub}`);
console.log(`Multiplicação ${n1} * ${n2} =${mult}`);
console.log(`Divisão ${n1} / ${n2} = ${div.toFixed(2)}`);
console.log(`Divisão inteira ${n1} / ${n2} = ${parseInt(div)}`);
console.log(`Porcentagem ${n1} % ${n2} = ${rest}`);

