let arr = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
}, {
    "id": 2,
    "first_name": "Raychel",

    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
}, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31"
}, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23"
}, {
    "id": 5,
    "first_name": "Venita",
    "email": "vheap4@clickbank.net",
    "date_of_birth": "2020/10/04"
}, {
    "id": 6,
    "first_name": "Fairfax",
    "email": "fcrichton5@merriam-webster.com",
    "date_of_birth": "2009/12/23"
}, {
    "id": 7,
    "first_name": "Kathleen",
    "email": "kvasyukhnov6@devhub.com",
    "date_of_birth": "2010/12/20"
}, {
    "id": 8,
    "first_name": "Sam",
    "email": "scorck7@sitemeter.com",
    "date_of_birth": "2020/08/30"
}, {
    "id": 9,
    "first_name": "Virgilio",
    "email": "vferandez8@e-recht24.de",
    "date_of_birth": "2000/09/07"
}, {
    "id": 10,
    "first_name": "Townie",
    "email": "tpetyt9@upenn.edu",
    "date_of_birth": "2018/09/01"
}]

//FILTER FUNCTION*********************************

let ans = [];
let arrSize = arr.length
// console.log('arry size is :',arrSize)

function filterByName(inclusion) {
    for (let i = 0; i < arrSize; i++) {
        firstName = arr[i].first_name;
        if (firstName.includes(inclusion)) {
            ans.push(arr[i]);
        }
        else {
            continue;
        }
    }
}

filterByName('ni');
// console.log(ans)


//MAP FUNCTION***************************
emailArray = [];
arr.map(getEmails)

function getEmails(item) {
    emailArray.push(item.email);
}
// console.log(emailArray);


//SORT FUNCTION***********************
function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const A = a.date_of_birth;
    const B = b.date_of_birth;

    let comparison = 0;
    if (A > B) {
        comparison = 1;
    } else if (A < B) {
        comparison = -1;
    }
    return comparison * -1;
}


//  console.log(arr.sort(compare));
// arr.sort(compare);  //This is mutating

arr.sort((a, b) => {
    return b.date_of_birth.localeCompare(a.date_of_birth);
});

// console.log(arr)






//FING OBJECT WITH GIVEN ID

function getById(num) {
    for (let i = 0; i < arrSize; i++) {
        if (arr[i].id == num) {
            console.log(arr[i]);
            return
        }
        else continue;
    }
}

// getById(9);
