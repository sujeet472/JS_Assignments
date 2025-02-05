// What will be printed to the console when the promise resolves and when it rejects?


// const testAsyncFunction = () => {

//     return new Promise((resolve, reject) => {
//         if (0.3 > 0.5) {
//             resolve('Test Resolve');
//         } else {
//             reject('Test Reject');
//         }
//     }).catch((err) => {
//         console.log('Error caught in testAsyncFunction: ', err);
//         return err;
//     });
// };

// testAsyncFunction()
//     .then((res) => {
//         console.log('Response in then block: ', res);
//     })
//     .catch((err) => console.log('Error in catch block: ', err));

// const testAsyncFunction = () => {
//     return Promise.reject('Test static reject');
// };

// testAsyncFunction()
//     .then((res) => {
//         console.log('Response in then block', res);
//     })
//     .catch((err) => console.log('Error in catch block', err));

const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (0.3 > 0.5) {
            resolve('Test Resolve');
        } else {

            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction', err);
        throw new Error('Forced error');
    });
};

testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));