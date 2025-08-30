/* Crie um programa que receba dois número 
e apresente a contagem do primeiro númerro até
o segundo. Caso o segundo número seja mmaior 
a contagem deve ser decresente.
Trate também possíveis erros nos valores
digitados.
*/

// Repetição com teste no início
const entrada = require('prompt-sync')();

let n1 = entrada('Digite um número: ');
let n2 = entrada('Digite outro número: ');
let repeticoes = 0;

if (isNaN(n1) || isNaN(n2)) {
  console.log('Por favor, digite apenas números!');
  process.exit(); // Encerra o programa
}

if (n1.length > 3 || n2.length > 3 ) {
    console.log('Cada numero pode ter no máximo 3 digitos');
    process.exit();
}

if (n1 === n2) {
  console.log('Por favor, digite um numero diferente!');
  process.exit(); 
  }
// Repetição com teste no início
while (n1 < n2) {
    console.log(n1);
    n1++;
    repeticoes++;
};

while (n1 > n2) {
    console.log(n1);
    n1--;
    repeticoes++;
};

console.log(`O código foi repetido ${repeticoes} vezes!`);