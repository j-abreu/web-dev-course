const fs = require('fs')
const path = require('path')

const relativePath = process.argv[2]
const completePath = path.join(__dirname, relativePath)

const p = new Promise((resolve) => {
    fs.readFile(completePath, (err, data) => {
        resolve(data.toString())
    })
})

p.then(console.log)
