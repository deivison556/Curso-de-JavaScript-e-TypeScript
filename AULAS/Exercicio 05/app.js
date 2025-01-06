const nome = prompt('Digite o seu nome completo:');
document.body.innerHTML = `O seu nome é: ${nome} </br>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras </br>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}</br>`;
document.body.innerHTML += `Qual o primeiro índice da letra i seu nome? ${nome.indexOf('i')}</br>`;
document.body.innerHTML += `Qual o último índice da letra i no seu nome? ${nome.lastIndexOf('i')}</br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)}</br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}</br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}</br>`;

