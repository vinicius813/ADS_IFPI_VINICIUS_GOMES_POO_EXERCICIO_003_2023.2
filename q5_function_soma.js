/* Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os
eventuais resultados: */
function soma(x, y) {
    return x + y;
}
console.log(1, 2);  // Resultado 1 2
console.log(1,"2");  // Resultado 1 2
console.log(1);  // Resultado 1

// Justificativa
/* Quando eu referencio um tipo number com tipo any para dois parâmetros do tipo number, a questão printa
o resultado como se minha função fosse any para qualquer tipo de valor, imprimindo em tela meus valores
independente do tipo number. */