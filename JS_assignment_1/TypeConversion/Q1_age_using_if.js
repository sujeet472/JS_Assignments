// 1. Declare a variable let age = 25;. Write a series of if else statements that will: ○ Print child to the console if age is less than equal to 12. 
// ○ Print teen to the console if age is between 13 and 18 (inclusive). 
// ○ Print adult to the console if age is above 18 

let age=25;

function printCategory(age){
    if(typeof age !== typeof(3)) {
        console.log("Wrong data type");
        return
    } 

    if(age<=12 && age>0){
        console.log("child");
    }
    else if (age <=18 & age>=13){
        console.log("teen");
    }
    else if (age>18){
        console.log("adult");
    }
    else{
        console.log("Wrong input");
    }
}

printCategory(null)
