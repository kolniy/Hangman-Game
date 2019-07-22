const myDataPromise = (num) =>  new Promise((resolve, reject) => {
    setTimeout(() => {
       typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

const processData = async () => {
    let data = await myDataPromise(2)
    data = await myDataPromise(data)
    data = await myDataPromise(data)
    return(data)
}

processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error)
})