alert('Com a nossa mensagem.');
confirm('Deseja realmente apagar?');
prompt('Digite o seu nome:');

const confirma = confirm('Você deseja acessar o site?');
console.log(confirma);

// Utilizando o prompt para capturar dados em variavel

let num1 = Number(prompt('Digite um numero'));
let num2 = Number(prompt('Digite um outro numero'));

let resultado = num1 + num2;
console.log(resultado);

// Mostrando o resultado na tela do usuario
alert(`${resultado}`);