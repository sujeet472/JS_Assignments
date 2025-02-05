// . Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable? 

let a = [1,2,3,4];
const b = [5,6,7];

a[0]=10;
// console.log(a);
b[0]=50;
// console.log(b);

//Impression : I did not expect the array value to get changes in spite of declaring as a const

let c = {tree:"mango", fruit: "kiwi"};
c.tree = "pineapple";
console.log(c);

const d = {car: "tata", type: "peterol"}
d.car = "maruti";
console.log(d)

//Impression : Again the value of d got cahnged even if it is defined as const
