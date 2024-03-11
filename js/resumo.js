let x = .3 -.2;//trinta centavos menos 20 centavos
let y = .2 - .1;//vinte centavos menos 10 centavos
x == y;// => falso: os dois valores nao sao os mesmos
x ==.1;//=> falso .3-.2 nao é igual a .1
x==.1;//verdadeiro .2- 1. é igual a .1

//datas e horas
 let then = new Date(2018, 0, 1, 0, 0, 0, 0);
 let later = new Date(then);

 let now = new Date();
  let elapsed = now - then;

  later.getFullYear();
  later.getMonth();
  later.getDate();
  later.getHours();
  later.getMinutes();
  later.getSeconds();
  later.toString();

  //strings literais
  ""// astring vazia : ela tem zero caracteres
'testing'
"3.14"
'name="John"'
//trabalhando com strings
let s = "hello";
s.charAt(0);
s.charAt(s.length - 1);
s.substring(1, 3);
s.substring(1);
s.slice(1, 3);
s.indexOf("l");
s.lastIndexOf("l");
s.indexOf("l", 3);
///comparando valores

let text ="testind: 1,2,3";
let pattern = /(\d+)/;//corresponde a um grupo de instancias de digitos 

pattern.test(text);//testa se o padrao corresponde ao texto verdadeiro
text.search(pattern);//busca o padrao
text.match(pattern);
text.replace(pattern, "a");
text.split(",");
//valores boleanos 
a == 4;
if(a == 4)//verdadeiro
b = b+ 1;
else 
a = a + 1;
//objetos wrapper

let sa = "hello";// uma string
let word = sa.substring(s.indexOf("")+1, sa.length);//usa pripriedades da string

let ra = "test";//começa com uma string
ra.len = 4;//configura uma propriedade nele
let t = ra.len;//agora consulta a propriedade

