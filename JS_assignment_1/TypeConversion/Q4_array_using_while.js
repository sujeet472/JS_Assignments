// 4. Accomplish the same using a while loop. 

arraySize =25;
let arr =[];

while(arraySize>0){
    arr.push(26-arraySize)
    arraySize --;
}

arr.forEach(element => {
    console.log(element)
});