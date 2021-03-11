// Implementation - 1
var a = 2;
var b = 3;
var c;
if (a == 2 && b== 3) {
    c = a+b;
    b = c-b;
    a = c - a;
    console.log("a is -",a,"and b is -", b); 
}

// Implementation - 2
var a = 5;
var b = 3;
[a, b] = [b, a];
console.log(a, b);

// Implementation - 3
var p = 4;
var q = 2;
var p = p+q;
var q = p - q;
var p = p - q;
console.log("p is",p,"q is", q);
