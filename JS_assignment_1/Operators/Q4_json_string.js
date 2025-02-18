// 4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that? 


// part1 : it will show syntax error and the code executio will stop

const jsonString = "{ name: 'Sujeet', age: 25 }"; 

console.log(JSON.parse(jsonString));

//part3 : No, the further execution will stop immediately

console.log("Before parsing...");
const data = JSON.parse("{ name: 'Sujeet' , age: 25}"); 
console.log("After parsing...");

 