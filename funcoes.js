//as funções sao blocos de codigo JavaScprit parametriados que podemos chamar
function plus1(x){//define uma função chamada "plus1 com o parametro x"
    return x+1;//retorna um valor uma unidade maior do que o que foi passado
}//as funoções sao incluidas entre chaves
plus1(y) //4: y 3 portanto essa chamada retorna 3+1
var square = function(x){ //as funções sao valores e podem ser atribuidas a variaveis
    return x*x;//calcula o valor da função
};//com ponto e virgula e o final da atribuição
square(plus(y))// chama duas funções em uma unica expressao
//tambem podemos definir nossos próprios metodos . A palavra chave this se refere ao objeto
// no qual o metodo e definido neste caso , o array de pontos anterior
points.dist = function(){//define um metodo para calcular a distancia entre
    var p1 = this[0]; //primeiro elemento do array que chamamos
    var p2 = this[1];//segundo elemento do objeto this
    var a = p2.x-p1.x;//diferença em coordenadas x
    var b = p2.y-p1.y;//diferenças em coordenadas y
    return Math.sqrt(a*a + b*b);//math.sqrt() calcula a raiz quadrada
};
points.dist()//=> 1,414 distancia entre nossos 2 pontos 
//agora funções cujos corpos demonstram instruções de estruturas de controle javascript comuns:
//as intruções Javascript incluem condicionais e laços que usam a sintaxe
//das linguagens c, c++c java e outras.
function abs (x){

}if(x >=0){
    return x;
}else{
    return -x;
}
