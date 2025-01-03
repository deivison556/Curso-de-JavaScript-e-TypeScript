// Exercicio 04 com variaveis
let varA = 'A';
let varB = 'B';
let varC = 'C';

const novaVarA = varA;
varA = varB;
varB = varC;
varC = novaVarA;

console.log(varA, varB, varC)