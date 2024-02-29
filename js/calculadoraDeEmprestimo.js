"use strict"

var amount = document.getElementById("amount");
var apr = document.getElementById("apr");
var years = document.getElementById("years");
var zipcode = documet.getElementById("zipcode");
var payment = document.getElementById("payment");
var total = document.getElementById("total");
var totalinterest = document.getElementById("totalinterest");

var principal = parseFloat(amount.value);
var interest = parseFloat(apr.value) /100/12;
var payments = parseFloat(years.value) *12;

//calcular valor do pagamento mensal
var x = Math.pow(1+ interest, payments);//Math.pow()calcula potencias
var monthly = (principal*x*interest)/(x-1);

if(isFinite(monthly)){
    payment.innerHTML = monthly.toFixed(2);
    total.innerHTML = (monthly * payments).toFixed(2);
    totalinterest.innerHTML = ((monthly*payments)-principal).toFixed(2);
    //salvando a entrada do usuario para que possamos recupera-la na primxa vez que ele visitar
    save(amount.value, apr.value, years.value, zipcode.value);
    try{
        getLenders(amount.value, apr.value, years.value, zipcode.value);
    }
    catch(e) {/*ignora esses erros*/}

    chart(principal, interest, monthly, payments);
}
    else {
    
        payment.innerHTML = " ";//apaga os elementos desse conteudo
        total.innerHTML = "";
        totalinterest.innerHTML ="";
        chart();//sem argumentos , apaga o grafico
    
       
}
if(window.localStorage){
            localStorage.loan_amount = amount; // ele so vai executar se o navegador suportar
            localStorage.loan_apr = apr;
            localStorage.loan_years = years;
            localStorage.loan_zipcode = zipcode;
}

window.onload = function(){
    if(window.localStorage && localStorage.loan_amount){
        document.getElementById("amount").value = localStorage.loan_amount;
        document.getElementById("apr").value = localStorage.loan_apr;
        document.getElementById("years").value = localStorage.loan_years;
        document.getElementById("zipcode").value = localStorage.loan_zipcode;
    }
};
if(!window.XMLHttpRequest)return;

var  ad = document.getElementById("lenders");
if(!ad) return;

var url = "getlenders.php"+"?amt=" 
+ encodeURIComponent(amount)+"&apr=" 
+ encodeURIComponent(apr)+"yrs=" 
+ encodeURIComponent(years) + "zip="
 + encodeURIComponent(zipcode) ;

 var req = new XMLHttpRequest();
 req.open("GET",url);
 req.send(null);

 req.onreadystatechange = function(){
    if(req.readyState == 4 && req.status == 200){
        var response = req.responseText;
        var lenders = JSON.parse(response);// analisa o array js
        var list = "";
        for (var i = 0; i < lenders.length; i++) {
            list += ""<li><a href='""+lenders[i].url+""+lenders[i].name + "" '></a>
             
        }
        ad.innerHTML = "<ul>" + list + "</ul>";
    }
 }

 function char(principal,interest,monthly,payments){
 var graph = document.getElementById("graph");
 graph.width = graph.width;
 if(arguments.length == 0 || !graph.getContext)return;
 var g = graph.getContext("2d");
 var width = graph.width, height = graph.height;//obtem o tamanho da tela e do desenho

 function paymentToX(n){
    return n * width/payments;
 }
 function amountToY(a){
    return height-(a* height/(monthly*payments*1.05))
 }
g.moveTo(paymentToX(0),amountToY(0));
g.lineTo(paymentToX(payments),
amountToY(monthly*payments));
g.lineTo(paymentToX(payments), amountToY(0));
g.closePath();
g.fillStlyle = "#f88";
g.fill();
g.font = "bold 12px sans-serif";
g.fillText("total interest payments", 20, 20);

var equity = 0;
g.beginPath();
g.moveTo(paymentToX(0), amountToY(0));
for(var p = 1; p <= payments; p++){
    var thisMonthInterest = (principal-equity)*interest;
    g.lineTo(paymentToX(p),amountToY(equity));
}   
g.lineTo(paymentToX(payments), amountToY(0));
g.closePath();
g.fillStlyle= "green";
g.fill();
g.fillText("total equity", 20,35);

var bal = principal;
g.beginPath();
g.moveTo(paymentToX(p),amountToY(bal));
for(var p = 1; p<=payments; p++){
    var thisMonthInterest = bal*interest;
    bal -=(monthly - thisMonthInterest);
    g.lineTo(paymentToX(p),amountToY(bal));
}
g.lineWidth = 3;
g.stroke();
g.fillStlyle="black";
g.fillText("Loan Balance", 20,50);

g.textAlign = "center";

var y = amountToY(0);
for(var year=1;year*12 <= payments; year++){
    var x = paymentToX(year*12);
    g.fillRect(x-0.5,y-3,1,3);
    if(year==1) g.fillText("Year", x, y-5);
    
    if(year%5 == 0 && year*12 !== payments)
    g.fillText(String(year),x,y-5);
}
g.textAlign = "rigth";
g.textBaseline = "middle";
var ticks = [ monthly*payments, principal];
var rightEdge = paymentToX(payments);
for(var i = 0; i< ticks.length; i++){
    var y = amountToY(ticks[i]);
    g.fillRect(rigthEdge-3,y-0.5, 3,1);
    g.fillText(String(ticks[i].toFixed(0)),
    rightEdge-5,y);
}

}