// 3. Do you think JSON.stringify would work for arrays as well?
// ans: Yes
// What about nested objects? 
// ans: they also get stringyfy
// What happens if we pass numbers, strings, undefined, null to JSON.stringify?
// ans: undefined remains undefined and rest are changed to string

let arr = [1,2,3];
let a = JSON.stringify(arr);

//console.log(typeof a) // return string... which means the array is stringyfied

let obj ={
    state: 'Maharashtra',
    city: 'Pune',
    address: {
        street: 'balewadi',
        company: 'josh'
    }
}

let b = JSON.stringify(obj);
// console.log('datatype of b is :', typeof b);


let x=10;
let y= 'sujeet';
let z= undefined;
let w= null;

console.log('stringyfy number :', JSON.stringify(x), 'type :', typeof JSON.stringify(x));
console.log('stringyfy string :', JSON.stringify(y), 'type :', typeof JSON.stringify(y));
console.log('stringyfy undefined :', JSON.stringify(z), 'type :', typeof JSON.stringify(z));
console.log('stringyfy null :', JSON.stringify(w), 'type :', typeof JSON.stringify(w));
