listOfExpenses = [];
var gBudget = 300;
var gExpenses = 0;
var gBalance = gBudget - gExpenses;

window.onload = function(){
    //var fs = require('fs');
 
    update();
    calculateExpenses();

    document.getElementById("expenses").innerHTML = gExpenses;
    document.getElementById("budget").innerHTML = gBudget;
    document.getElementById("balance").innerHTML = gBalance;
};

function addExpense(newvalue){
    var ul = document.getElementById("listofexpenses");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newvalue));
    ul.appendChild(li);
};

function calculateExpenses(){
    var expenses = document.getElementById("listofexpenses");
    var listItem = document.getElementsByTagName("li");
    var budget = gBudget;

    for (var i=0; i < listItem.length; i++){
        listOfExpenses.push(parseInt(listItem[i].innerHTML, 10));
    }
    var total = 0;
    for(var i=0; i < listOfExpenses.length; i++){
        total += parseInt(listOfExpenses[i], 10);
        console.log(total);
    }
    document.getElementById("expenses").innerHTML = total;
    console.log(listOfExpenses);
    listOfExpenses = [];
    console.log(listOfExpenses);
    var balance = parseInt((budget - total), 10);
    document.getElementById("balance").innerHTML = balance;
    console.log(balance);
};

function saveData(){

};

function update(){
    //updates the list of expenses by rebuilding the object and then reinitalizing the list of elements
    calculateExpenses();
};
