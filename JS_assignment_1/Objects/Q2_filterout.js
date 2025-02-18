//  Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example: 



// function filterObj(obj) {
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key, value]) =>
//             typeof value !== 'object' || value === null
//         )
//     );
// }

function filterKeys(obj) {
    return Object.keys(obj).filter(key => 
        typeof obj[key] !== 'object' || obj[key] === null
    );
}


let obj = {
    a: "Apple",
    b: ["Basketball", "Baseball"],
    c: { call: "cellphone" },
    d: "Dog"
};

console.log(filterKeys(obj));

