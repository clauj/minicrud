var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const ORIGEMBANCO = "db.sqlite"

let db = new sqlite3.Database(ORIGEMBANCO, (err) => {
    if (err) {
        // Aviso de erro ao abrir o banco de dados
        console.error(err.message)
        throw err
    }
    else {
        console.log("Conectado ao banco de dados SQLite")
    };
});

module.exports = db;