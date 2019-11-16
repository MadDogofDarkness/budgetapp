//include file system module for javascript
//var fs = require('fs');
//object to hold the expense data from the file
var obj = {
    table:[]
};
//obj.table.push({data}); pushes data to the object
var budgetTotal, expenses, newExpense, balance = 0; //initalize the 4 variables
budgetTotal = 300;

//define functions
function initalizeApp(){
    document.getElementById("budget").innerHtml = "300";
}

//onload, read the file and update variables, and update the display
window.onload = function(){
    initalizeApp();
};
//onclick, execute the function which adds the new value to the total, and update the display



