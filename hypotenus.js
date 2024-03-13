let a;
let b;
let c;

a = window.prompt("Enter side A: ")
a = Number(a)

b = window.prompt("Enter side B: ")
b = Number(b)

c = Math.pow(a,2) + Math.pow(b,2);
c = Math.sqrt(c)

console.log(c)

