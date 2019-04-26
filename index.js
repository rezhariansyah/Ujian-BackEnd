const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/' , (req,res) => {
    res.send(`<h1>Ini Home Page Movie</h1>`)
})

app.use('/movie' , require('./2.router/movieRouter'))
app.use('/category' , require ('./2.router/categoryRouter'))
app.use('/movcat' , require('./2.router/movcatRouter'))

app.listen(port , () => console.log('Server di port ' + port))