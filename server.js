// Criando App em Express
var express = require("express")
var app = express()
var db = require("./database.js")

// Porta do Servidor
var PORTA_HTTP = 1500

// Iniciar Servidor
app.listen(PORTA_HTTP, () => {
    console.log(`O servidor está sendo executado na ${PORTA_HTTP}.`)
});

// Rota Raiz
app.get("/", (req, res, next) => {
    res.json({"mensagem": "OK!"})
});

// Espaço para inserir outras rotas

app.get("/api/usuarios", (req, res, next) => {
    var sql = "select * from usuario"
    var params = []

    db.all(sql, params, (err, linhas) => {
        if (err) {
            res.status(400).json({"erro":err.mensagem});
            return;
        }
        res.json({
            "mensagem":"sucesso",
            "data":linhas,
        })
    });
}) 

// Padrão de resposta para qualquer outra requisição (Uso do erro 404 - Não encontrado)
app.use(function (req, res) {
    res.status(404);
});