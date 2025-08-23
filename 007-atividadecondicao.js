/*Crie um programa de um estabelecimento que receba dados como
o nome, a idade e se a pessoa é amigo do dono.
Retorne uma mensagem de acordo com as validações abaixo:
 -Se apessoa ter mais de 18 ano o acesso ao local será liberado.
 -Amigos do dono podem acessar o local  idependente da idade.
 -Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhara
 uma bebida.
*/

let  entrada = require ('prompt-sync')();
console.log('Bem vindo ao nosso estabelecimento. ');
let nome = entrada('Por favor digite seu nome: ');
let idade = entrada('Agora por favor informe sua idade: ');
let amigo = entrada('Por favor informe se você conhece o dono: ');
console.log('Digite 1 para sim e 2 para não.')

let validade = isNaN(idade); //Verificar se o que foi digitado é um número

if (validade){
 console.log(`´${nome} insira um valor numérico na idade!`);
 }else{
    if((idade >= 18) && (amigo == 1)) {
        console.log('Acesso liberado, tem direito a cerveja gratís.');
    }
    else if (((idade < 18) || (idade >= 18)) && (amigo == 1)) {
        console.log('Acesso librado por ser amigo do dono.');
    }
    else if (idade >= 18) {
        console.log('Acesso liberado pela maior idade.');
    }
    else if ((idade < 18 ) && (amigo == 2)) {
        console.log('Você não tem a idade nescessária para entrar no nosso estabelecimento me desculpe.');
    }
 }

