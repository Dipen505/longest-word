var array = "The watch is the friend        what is your";
var count = 0;
for ( var i = 0; i<array.length; i++) {
    var result = array[i];
    if ( result == " " && array[i+1] !== " ") {
        count++;
    }
}
count++;
console.log(count);
