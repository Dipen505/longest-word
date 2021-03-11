function hello(number) {
    var result = number +10;
    return result;
}
var first = hello(10);
var second = hello(20);
var total = first + second;
console.log(total);

function touch (){
    console.log("you have just clicked the mobile");
}
touch();

function grab(number, number1) {
    var result = number + number1;
    return result;
}
var sum = grab(10, 20);
var sum1 = grab(10, 20);
console.log(sum, sum1);