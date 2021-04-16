const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send(`<h1>Hello, ${req.body.username}<\h1>`)
})

app.get('/users', (req, res) => {
    console.log(req.query)
    res.send('GET')
})

app.post('/ users/:id', (req, res) => {
    console.log(req.body)
    res.send(`POST ${req.params.id}`)
})

app.listen(3003)