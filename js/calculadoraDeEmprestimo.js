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

