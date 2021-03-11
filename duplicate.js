// var array = [1,2,2,7,7, 8, 8, 8];
// var i,num;
// for(i = 0; i<array.length-1; i++){
//     if(array[i] != array[i+1]){
//         console.log(array[i]);
//     }

// }
// console.log(array[i]);

var array = [1, 3, 3,3,3,3,3,3,3,3, 4, 4, 4, 5, 3, 3];
for ( var i = 0; i<array.length-1; i++) {
    if (array[i] !== array[i+1]) {
        console.log(array[i]);
    }
}
console.log(array)