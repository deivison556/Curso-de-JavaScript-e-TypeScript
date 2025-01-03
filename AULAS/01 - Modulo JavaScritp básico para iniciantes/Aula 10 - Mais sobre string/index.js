// Acessando o indice de uma string
//               01234567
let umaString = "Um texto";
console.log(umaString[4]); //retornara a letra 'e'

// Outra forma de acessa indice de uma string
console.log(umaString.charAt(6)); //retornara a letra 't';

// Pesquisando por um indice de uma string
console.log(umaString.indexOf('texto')); // a palavra 'texto' começa no indice 3
console.log(umaString.lastIndexOf('o')); // Esse começa buscar de trás para frente

// Consultando o tamanho de uma string
console.log(umaString.length);

// Transformando a string em letra maiuscula
console.log(umaString.toUpperCase())

// Transformando a string em letra minuscula
console.log(umaString.toLowerCase())