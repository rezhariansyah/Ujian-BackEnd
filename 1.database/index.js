const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'rezha',
    password : 'raffiandhika',
    database : 'movie',
    port : 3306
})

module.exports = db