Important topic of Module 12

// first way
var price = 12;
var price1 = 10;
var price2 = 10;
price2++;
console.log(price + price1 + price2);

// Second way
var price = 12;
var price1 = 10;
var price2 = 10;
var newVarPrice2 = price2 - 5;
console.log(price + price1 + newVarPrice2);

// Third way
var price = 12;
var price1 = 10;
var price2 = 10;
price2 = price2 + 1;
console.log(price + price1 + price2);

// If you want to subtraction so you have to subtraction sign place to plus sign.Example
var price = 12;
var price1 = 10;
var price2 = 10;
price2 = price2 - 1;
console.log(price + price1 + price2);

var price = 1200;
var price1 = 120;
var price2 = 10;
var newVarPrice2 = price2 - 5;
console.log(price + price1 + price2);

// How to convert negetive number as a Absolute Number
var mathNo = -12;
var absoluteNumber = Math.abs(mathNo);
console.log(absoluteNumber);

// How to float number convert to round number
var price = 5.5;
var result = Math.round(price);
console.log(result);

// Ceil
var number = 12.4;
var result = Math.ceil(number);
console.log(result);

// floor
var number = 12.99;
var result = Math.floor(number);
console.log(result);

// random
var number = 12.55;
var result = Math.random(number);
console.log(result);

// Using random and round combinely
var money = Math.random() * 100;
var result = Math.round(money);
console.log(result);

// Convert to uppercase
var proverb = "Blood is thicker than water";
console.log(proverb.toUpperCase());

// Convert to lowercase
var proverb = "Where there is a will there is a way";
console.log(proverb.toLowerCase());

// How to find which letter in which position in number?
var proverb = "All that glitters is not gold";
console.log(proverb.indexOf('g'));

// Basic if else 
var breadPrice = 20;
if (breadPrice < 20) {                    
    console.log("I will get this");
}
else {
    console.log("otherwise I can't");
}

// using Or sign --> ||
var havingJob = true;
var savingAmount = 1000;
if(havingJob == true || savingAmount > 2000) {
 console.log("Yes");
}
else {
    console.log("No");
}

// Using And sign --> &
var havingJob = true;
var savingAmount = 1000;
if(havingJob == true && savingAmount > 2000) {
 console.log("Yes");
}
else {
    console.log("No");
} 

// Using else if 
var married = true;
var savingAmount = 2000;
if (married == true && savingAmount > 2100) {
    console.log("I will give my daughter to you");
}
else if(married == true) { 
    console.log("I will take my decision");
}
else {
    console.log("Get lost");
}
