const express = require('express')
const bodyParser = require('body-parser');
//const engine = require('./.html/.script')

const app = express()
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/.html/index.html")
})

app.post('/resposta', urlencodedParser, (req, res) => {
    reload(req.body.name, req.body.password)
    res.send('Cadastro realizado')
})

app.listen(3000, () => {
    console.log("Server open in port 3000: https://localhost:3000")
})


