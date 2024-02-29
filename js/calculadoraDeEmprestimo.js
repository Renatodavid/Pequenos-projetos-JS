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