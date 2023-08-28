/* Crie uma função exibir receba como parâmetro um “rest parameter” representando
strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”); */

function exibirStrings(elementos : string[]): void {
    elementos.forEach(elemento => {
        console.log(elemento);
    });
}

console.log("a","b");
console.log("a","b","c");
console.log("a","b","c","d");

/* Neste exemplo, a função exibir utiliza o "rest parameter" (...elementos) para receber uma 
lista variável de strings como parâmetros. */

/* O método forEach é usado para iterar sobre cada elemento na lista e exibi-lo no console. 
Você pode chamar a função exibir com diferentes quantidades de parâmetros e ela irá exibir
cada elemento passado. */