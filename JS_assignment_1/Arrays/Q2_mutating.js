// What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?: ○ push 
// ○ pop : mutating
// ○ filter : non-mutating
// ○ find : non-mutating
// ○ sort : mutating
// ○ map : non-mutating



let arr = [1, 2, 3];
let original = [...arr]; 

arr.push(4); 

console.log(arr);       // [1, 2, 3, 4] (Modified)
console.log(original);  // [1, 2, 3] (Unchanged)
console.log(arr === original); // false, confirming mutation

