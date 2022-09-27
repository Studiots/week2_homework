const express = require('express')
const app = express()
const path = require('path');
const port = 2500


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/home.html'));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'));
})
app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname + '/map.html'));
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})