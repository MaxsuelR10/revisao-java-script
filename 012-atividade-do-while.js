/* 
  continuando a ímplementação do exemplo 11,
  faça com que o programa só aceite uma senha
  errada três, vezes após a terceira tentativa 
  errada o sistema deve apresentar a mensagem 
  informando que o usuário está bloqueado.
  Quando a senha for digitada corretamente, a mensagem
  "Bem vindo ao sistema de login" deve ser apresntada.
  */

let entrada = require('prompt-sync')();

const senha = '1475369';

let senhaDigitada = '';
let contador = 0;

do {
    if (contador >= 3) {
        break;
    }

    senhaDigitada = entrada('Digite a senha para acessar o sistema: ');
    contador++;
} while (senhaDigitada !== senha);

if (contador >= 3) {
    console.log('Você excedeu o limite de tentativas! \nSeu login está bloqueado.');
} else {
    console.log('Bem vindo ao sistema de login!');
}
