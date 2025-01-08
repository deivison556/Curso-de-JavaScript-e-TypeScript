// Tipo de dado number
let num1 = 1;
let num2 = 2.5;

console.log(num1 + num2);

// Como arredondar um number
let num3 = 10.57581215;
let num4 = 3.5;

console.log(num3.toFixed(2)); //arrendado para cima 10.58

// Como saber se um número é inteiro
console.log(Number.isInteger(num1));

// Como saber se é um numero é NaN
let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); // vai retornar verdadeiro

