/* Crie uma função que recebe como parâmetro um número e retorna true se o
número for primo e false caso contrário. */
/* Um número natural é primo se ele possui apenas dois divisores positivos e distintos. Ou seja,
um número natural é primo se ele é maior que 1 e é divisível apenas por si próprio e por 1. Um
exemplo: o número 2. */

function serPrimo(numero) {
    if (numero > 1 || numero / numero === 1 || numero / 1 === numero) {
        return true;
    }
    else {
        return false;
    }
}
console.log(serPrimo(2));
console.log(serPrimo(7));
