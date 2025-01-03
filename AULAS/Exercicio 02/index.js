const nome = 'Deivison';
const sobrenome = 'Gracindo';
const idade = 27;
const peso = 73;
const altura = 1.8;
let imc = peso / (altura * altura);
let anoNascimento = 2024 - idade;

const frase = `Olá, ${nome} ${sobrenome}, você tem ${idade} anos, pesa ${peso} kg, a sua altura é ${altura} e seu IMC é de ${imc}. E você nasceu em ${anoNascimento}`

console.log(frase);