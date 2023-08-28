/* Crie uma função que receba como parâmetros um nome e um pronome de
tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”. */

function saudacao(nome : string, pronomeTratamento : string): any {
    return `${pronomeTratamento}.${nome}`;
}

const nome = "Sávia";
const criarsaudacao = saudacao(nome, "Sra");

console.log(criarsaudacao);
