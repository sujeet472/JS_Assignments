function memoize(fn) {
    let cache = new Map();
    
    return function(...args) {
        let key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("Fetching from cache:", key);
            return cache.get(key);
        }
        console.log("Computing result for:", key);
        let result = fn(...args);
        cache.set(key, result);
        return result;
    };
}


const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(4, 5)); 
console.log(memoizedAdd(4, 5)); 
