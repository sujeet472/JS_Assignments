//2. Use the typeof operator to find the types of different variables. Specially note what t typeof operator returns for arrays, null values and NaN. How can you find if a variable  an array or NaN besides typeof? 



let a =10;
let b=20.00;
let c = [1,2,3,4];
let d = {a:1,b:2,c:3};
let e = null;
let f = undefined;
let g;

console.log("a output : ",typeof(a)) //a output :  number
console.log("b output : ",typeof(b)) //b output :  number
console.log("c output : ",typeof(c)) // c output :  object
console.log("d output : ",typeof(d)) // d output :  object
console.log("e output : ",typeof(e)) // e output :  object
console.log("f output : ",typeof(f)) // f output :  undefined
console.log("g output : ",typeof(g)) // g output :  undefined
console.log("Is c an array? : ",Array.isArray(c)) //Is c an array? :  true






