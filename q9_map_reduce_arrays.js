/* Crie um exemplo usando a função map para dobrar os elementos de um array e
reduce para totalizar a soma dos elementos do array. */
var arranjo = [1, 2, 3, 4, 5];
// Usa-se a função map para dobrar os elementos de um array
var arrayDobrado = arranjo.map(function (numero) { return numero * 2; });
// Usa-se a função reduce para totalizar a soma dos elementos de um array
var somatorio = arranjo.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
console.log(arrayDobrado);
console.log(somatorio);
/* Neste exemplo, começamos com um array de números. Usamos a função map para
criar um novo array arrayDobrado onde cada elemento é o dobro do elemento correspondente
no array original. Em seguida, usamos a função reduce para calcular a soma total dos elementos
 do array original começando com um valor inicial de 0. O resultado final é impresso no console. */
