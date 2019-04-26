const db = require('../1.database')

module.exports = {
    // get semua data movie
    getAllMovies : (req,res) => {
        db.query(`select * from movies`, (err, result) => {
                    if (err) throw err
                    if (result) {
                        res.send(result)
                    }
                })
    },
    // add movie
    addMovie : (req,res) => {
        var dataMovies = {
            nama : req.body.nama,
            tahun : req.body.tahun,
            description : req.body.description
        }
        var sql = `insert into movies set ?`
        db.query(sql, dataMovies, (err,result) => {
            if(err) throw err
            res.redirect('/movie/getAllMovies')
        })
    },
    // edit movie
    editMovieById : (req,res) => {
        var dataMovies = {
            nama : req.body.nama,
            tahun : req.body.tahun,
            description : req.body.description
        }
        var sql = `update movies set ? where id = ${req.params.id}`
        db.query(sql, dataMovies, (err,result) => {
            if(err) throw err
            res.redirect('/movie/getAllMovies')
        })
    },
    // delete movie
    deleteMovieById : (req,res) => {
        var sql = `delete from movies where id = ${req.params.id}`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.redirect('/movie/getAllMovies')
        })
    },
    
}






