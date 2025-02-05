async function getApiData(){
    const url ="https://reqres.in/api/users";
    try{
        const response = await fetch(url);
    
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    }catch(error){
        console.error(error.message);
    }

}

getApiData()


