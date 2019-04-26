const db = require('../1.database')

module.exports = {
    // getAllMovcat
    getMovCat : (req,res) => {
        var sql = `select m.nama as Movie, c.nama as Category from movcat
        join movies as m on idmovie = m.id
        join categories as c on idcategory = c.id;`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    }
    // add movcat

    // delete movcat
}