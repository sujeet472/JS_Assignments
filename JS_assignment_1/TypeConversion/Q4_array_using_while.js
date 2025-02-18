// 4. Accomplish the same using a while loop. 

let arraySize =25;
let arr =[];
let counter = 1;


while(counter<=arraySize){
    arr.push(counter)
    counter ++;
}

arr.forEach(element => {
    console.log(element)
});