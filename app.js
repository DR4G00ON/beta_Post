const express = require('express')
const bodyParser = require('body-parser');
const mysql = require('mysql2')

let decision = false
var name
const password = ''
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


let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_node"
})
var connectionD = false
conn.connect((err) => {
    if(err){
        connectionD = false
        console.log("databade failed !!!", err);
    }
    else{

        connectionD = true
 
        
        console.log("Connected to database");
    }
})
function reload(nameV, passwordV){
    var sql = "insert into tb_registerUser(nm_email, cd_password) values ('"+nameV+"', '"+passwordV+"');"
    conn.query(sql, (err, result) =>{
        console.log(result);
    })
}


