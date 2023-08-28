/* Crie uma função que retorne os números de um array passados por parâmetro
separados por traço (-) no formato string. Para isso, use o método forEach dos
arrays. */
function formatarArrayToStrings(arranjo) {
    var stringformatada = "";
    arranjo.forEach(function (numero, index) {
        stringformatada += numero.toString();
        if (index < arranjo.length - 1) {
            stringformatada += "-";
        }
    });
    return stringformatada;
}
var numeros = [1, 2, 3, 4, 5];
var resultado = formatarArrayToStrings(numeros);
console.log(resultado);
