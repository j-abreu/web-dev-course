const p = new Promise((resolve) => {
    resolve(['joao', 'marcos', 'cesar'])
})

p.then(res => {
    res.map(e => console.log(e))
})

const p2 = new Promise ((resolve) => {
    resolve([1, 2, 3, 4])
})

const squaredArray = arr => arr.map(e => e*e)

p2.then(squaredArray)
    .then(console.log)