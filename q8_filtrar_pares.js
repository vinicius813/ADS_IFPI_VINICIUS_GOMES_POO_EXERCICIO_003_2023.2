/* Dado método filter dos arrays, crie uma implementação usando arrow function
que filtre todos os elementos pares do array abaixo:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; */
var arranjo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var numerosPares = arranjo.filter(function (numero) { return numero % 2 === 0; });
console.log(numerosPares);
/* Neste exemplo, usamos o método filter no array array e passamos uma arrow function como argumento.
A arrow function verifica se cada número no array é par usando o operador de módulo %. Se o resultado
for igual a 0, o número é par e é incluído no novo array numerosPares. No final, imprimimos o array
numerosPares que contém todos os elementos pares do array original. */
