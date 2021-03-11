function call(number) {
    var sum = 0;
    for ( var i = 0; i<number.length; i++) {
        var element = number[i];
        var sum = element + sum;
    }
    return sum;
}
var number = ['alu, blu, clu, glu, dlu, flu'];
var result = call(number);
console.log(result);

var result1 = call([23, 4, 5, 6,]);
console.log(result1);