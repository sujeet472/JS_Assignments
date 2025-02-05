// 1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have? 



//Ans : It behaves normally
// Yes statements execute after the loop
//return depends on the value you want to return
//Yes we can return from inside the if statement..it will exits the function and blow that do not work



// console.log("Lets run the file");

//While loop**************
// let limit=10;
// function countNumber(limit){
//     while(limit>0){
//         if(limit==5) return console.log("loop returned");
//         console.log(limit);
//         limit --;
//     }
//     console.log('count completed'); //This is not getting printed 
// }
// countNumber(limit);



//For loop **************

// let age = 25;
// function ageAccess(age) {

//     switch (true) {
//         case (age <= 18 && age >= 13):
//             console.log('teen');
//             return;
//         case (age <= 12):
//             console.log('child');
//             return;
//         case (age > 18):
//             console.log('adult');
//             return;
//         default:
//             console.log("wrong input")
//     }

// }
// ageAccess(age);



//WHILE LOOP*************

// function printNumber(num){

//     while(num>0){
//         if(num==3) return;
//         console.log(num);
//         num--;
//     }
// }

// printNumber(10);