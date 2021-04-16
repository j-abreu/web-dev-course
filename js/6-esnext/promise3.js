function workOrNot(message, errorProb) {
    return new Promise((resolve, reject) => {
        try{
            if (Mat.random() > errorProb) {
                resolve(message)
            } else {
                reject('Houve um erro!')
            }
        } catch(err) {
            reject(err)
        }
    })
}


workOrNot('work', 0.5)
    .then(console.log)
    .then(() => {
        console.log('Ok!')
    }, err => {
        console.log('Trata error', err.toString())
    })
    .catch(err => {
        console.log(`error: ${err}`)
    })
    .then(() => console.log('End!'))