// const delayedFetch = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setTimeout(() => {
//                     resolve(data);  // Resolve after 2 seconds
//                 }, 2000);
//             })
//             .catch(error => reject(error));  // Handle fetch errors
//     });
// };

// // Usage example
// delayedFetch('https://reqres.in/api/users')
//     .then(data => console.log('Data received after 2 seconds:', data))
//     .catch(error => console.error('Fetch error:', error));




const delayedFetch = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

    
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data);
    } catch (error) {
        throw error; 
    }
};


delayedFetch('https://reqres.in/api/users')

