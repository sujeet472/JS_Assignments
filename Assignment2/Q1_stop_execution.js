const func = async () => {
    console.log('Printing before')
    await sleep(3000)
    
    console.log('Printing after')
}

func()

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}