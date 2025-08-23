let  entrada = require ('prompt-sync')();
 let nome = entrada('Digite seu nome: ');
 let idade = entrada('Digite sua idade: ');

 let validade = isNaN(idade);

 if (validade){
 console.log(`´${nome} insira um valor numérico na idade!`);
 }else{
    if(idade > 18) {
        console.log('Bem vindo ao site.');
    }
    if(idade < 18 ) {
        console.log('Você não tem idade para acessar o site.');
    } else {
        console.log('ok você tem 18 anos.')
    }
 }

 if (nome.length < 5) {
    console.log('Seu nome é meuito curto.')
 }

 const maioridade = idade >= 18 ? 'Maior' : 'Menor'; // Ternário
 console.log(`${nome} descobri que você é ${maioridade} de idade.`);