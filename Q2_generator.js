// Implement a Fibonacci sequence generator using a generator function in
// JavaScript.

// function* generate(){
//     yield 'sujeet'
//     yield 'gupta'
//     yield 'kumar'
// }

// const generator = generate();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

function* fibo(limit){
    let [prev, current ] = [0,1];
    while(limit--){
        yield prev;
        [prev, current] = [current, prev+current];
    }
}

const fib = fibo(5);
console.log([...fib]);