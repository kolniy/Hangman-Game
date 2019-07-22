// callback
const getDataCallBack = (num, callback) => {
    setTimeout(() => {
       if(typeof num === 'number'){
           callback(undefined, num * 2)
       } else {
           callback('Number must be provided')
       }
    }, 2000)
}

getDataCallBack(3, (error, data) => {
    if(error){
        console.log(error)
    } else {
       getDataCallBack(data, (err, nu) => {
           if(err){
               console.log(err)
           } else {
               console.log(nu)
           }
       })
    }
})


const myDataPromise = (num) =>  new Promise((resolve, reject) => {
        setTimeout(() => {
           typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
        }, 2000)
    })

// Promise
myDataPromise(2).then((data) => {
    myDataPromise(data).then((data) => {
        console.log(`Promise Data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})


myDataPromise(10).then((data) => {
    return myDataPromise(data)
}).then((data) => {
    return myDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})