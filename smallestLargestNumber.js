// Implementation - 1
// var array = [23, 54, 54, 3, 66, 33, 65];
// console.log(Math.max.apply(null,array)); //* <-- This is built in function.

// // Implementation - 2
// var array = [23, 54, 23, 55, 33, 544];
// var element = 0;
// for ( var i = 0; i<array.length; i++) {
//     var largest = array[i];
//     if (element < largest) {
//         element = largest;
//     }
// }
// console.log(largest);
// Implementation - 3 this implementation took 4 hours thinking but i couldn't solve this 
var array = [23, 54, 2, 55, 33, 544];
var element = array[0];
for( var i = 0; i<array.length; i++) {
    var smallest = array[i];
    if (element > smallest) {
      element = smallest;
    }
}
console.log(element);

// Implementation - 4
// var array = [23, 54, 23, 2, 554, 65];
// console.log(Math.min.apply(null,array));