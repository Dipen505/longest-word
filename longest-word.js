// Implementation-1
function megaCountry(names){
    if (names == " ") {
        return "Error";
    }
    else {
        var longText = names[0];
        var i = 0;
        while (i<names.length) {
            var nameslength = names[i].length;
            if (nameslength > longText.length) {
                longText = names[i];
            }
            i++;
        }
    }
    return longText;
}
    
var names = ["Canada", "India", "Bangladesh","Amsterdam", "Tokyo"];
var out = megaCountry(names);
console.log(out);

// Implementation - 2
function megaFruit(names) {
    var temp =[0];
    for ( var i = 0; i<names.length; i++) {
        var namesLength = names[i].length;
        var index = names[i];
        if (namesLength > temp) {
            var output = index;
            temp = namesLength;
        }
    }
    return output;
}
var names = ["Mango","Banana;","Jackfruit","Strawberry"];
var result = megaFruit(names);
console.log(result);

// Implementation - 3
function megaMobile(names) {
    if (names == " ") {
        return "Unacceptable Value";
    }
    else {
        var temp = names[0];
        for(var i = 0; i<names.length; i++) {
            var result = names[i].length;
            if (result > temp.length) {
                temp = names[i];
            }
        }
    }
    return temp;
}
var names = ["Samsung","Nokia","Blackberry","Walton"]
var output = megaMobile(names);
console.log(output);