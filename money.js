var cash = 2.99;
cash = cash * 100;
console.log("Initial Cash:", cash)

var purse = {
	quarters: 0, 
    dimes: 0, 
    nickels: 0, 
    pennies: 0 
}

var quarters = cash / 25;
quarters = Math.floor(quarters);
cash = cash % 25;
// console.log(quarters);

var dimes = cash / 10;
dimes = Math.floor(dimes);
cash = cash % 10;
// console.log(dimes)

var nickels = cash / 5;
nickels = Math.floor(nickels);
cash = cash % 5;
// console.log(nickels)

var pennies = cash; 
// console.log(pennies)


purse.quarters = quarters;
purse.dimes = dimes;
purse.nickels = nickels;
purse.pennies = pennies;




console.log(purse)





function user_cash() {
    cash = document.getElementById("cash").input;
}
















