let a = 7;
let b = 94;
console.log("a: " + a);
console.log("b: " + b);

let aux = a;
a = b;
b = aux;
console.log("Var exchanged:");
console.log("a: " + a);
console.log("b: " + b);

[a, b] = [b, a];
console.log("Var exchanged:");
console.log("a: " + a);
console.log("b: " + b);
