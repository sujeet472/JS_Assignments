// 2. Take a function that accepts a function as a parameter (also known as callback function). function test(callback){ 
//     callback(); }

//function callbackFunc(){ 
//   console.log(“Calling the callback function”) 
//   return 5;} 
//     Explore the following cases - what is printed in the console, and what gets returned: ○ test(callbackFunc) 
//     ○ test(callbackFunc()) 
//     ○ test(() => callbackFunc()) 
//     ○ What happens when you return callback() from the test function? ○ What happens when you return callback from the test function?


//Answer:
// the rest of the question results in the same output except the 
//○ What happens when you return callback from the test function?
//it gives and error

function test(callback){ 
    return callback; 
} 
    
function callbackFunc(){ 
    console.log("Calling the callback function") ;
    return 5; 
} 


test(callbackFunc);
// test(() => callbackFunc()) 