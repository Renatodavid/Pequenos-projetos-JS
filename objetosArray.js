// o tipo de dados mais importante de jsavasrpit é o objeto
// um objeto e uma coleçao de pares nome/valor ou uma string para mapa de valores

var book ={ // objetos sao colocados entre chaves
    topic:"javaScprit",//a propriedade "topic tem o valor "javascript
    fat: true //a propriedade "fat tem o valor true."
};// fim do objeto

//acessando um objeto

book.topic // => JavaScript
book["fat"] //=> true outro modo de acessar valores de propriedade
book.author = "flanagan"; // crie novas propriedades por meio de atribuicao
book.contents = {};//e um objeto vazio sem qualquer propriedade

//javascrpit tambem aceita  arrays ( listas indexadas numericamente ) de valores

var primes = [ 2, 3, 5, 7] // um array de 4 valores , delimitando com [e].
primes[0] // => 2: o primeiro elemento ( indice 0) do array
primes.length //=> 4 quantidade de elementos no array
primes[primes.length-1]// => 7 o ultimo elemento do array
primes[4] = 9;//adiciona um noco elemento por meio de atribuicao
primes[4] = 11;// ou altera um elemento existente por meio de atribuicao
var empy = []; // é um array vazio sem qualquer elemento
empy.length// => 0

//os array e objetos podem conter outros arrays e objetos;

var points =[
    {x:0, y:0},//um array com 2 elementos
    {x:1, y:1}//cada elemento é um objeto
];
var data = {//um objeto com 2propriedades
    trial1:[[1,2],[3,4]],//o valor de cada propriedade
    trial2:[[2,3],[4,5]]//os elementos do arraus sao arrays
};