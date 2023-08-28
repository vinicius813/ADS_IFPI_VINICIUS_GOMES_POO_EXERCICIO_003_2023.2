/* Crie uma função que retorne como parâmetro um número e retorna true se
o número for par e false se for ímpar. */
// Criando a função para chamar este número
function mostrarCondicao(numero) {
    if (numero % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

console.log(mostrarCondicao(4));
console.log(mostrarCondicao(5));