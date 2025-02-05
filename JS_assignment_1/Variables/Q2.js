//2. Use the typeof operator to find the types of different variables. Specially note what t typeof operator returns for arrays, null values and NaN. How can you find if a variable  an array or NaN besides typeof? 



let a =10;
let b=20.00;
let c = [1,2,3,4];
let d = {a:1,b:2,c:3};
let e = null;
let f = undefined;
let g;

console.log("a output : ",typeof(a))
console.log("b output : ",typeof(b))
console.log("c output : ",typeof(c))
console.log("d output : ",typeof(d))
console.log("e output : ",typeof(e))
console.log("f output : ",typeof(f))
console.log("g output : ",typeof(g))
console.log("Is c an array? : ",Array.isArray(c))






