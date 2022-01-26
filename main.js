const express = require('express')

const app = express()

const bodyParser = require('body-parser')
const cors = require("cors");
const configCors = {
    origin: "*",
    Credential: true,
    optionSuccessStatus: 200
};
app.use(cors(configCors));

app.use(bodyParser.json())

var clientes = [
     {
        id: "1",
        name: "Adriana",
        email: "adriana@gmail.com"
    }, {
        id: "2",
        name: "Lucas",
        email: "lucas@gmail.com"
    }, {
        id: "3",
        name: "Adamilton",
        email: "adamilton@gmail.com"
    },
    {
        id: "4",
        name: "Ruth",
        email: "ruth@gmail.com"
    },
    {
        id: "5",
        name: "Fernando",
        email: "fernando@gmail.com"
    }
];

app.get('/', (request, response) => {
    response.send(clientes)
})

app.post("/adicionar", (request, response) => {
    const cliente = request.body;
    clientes.push(cliente)
    response.status(201).send();
})
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './') + 'index.html') 
})

app.get('/dados', function(req, res) {
    res.send(clientes)
})

app.delete("/deletar/", (request, response) => {
    const cliente = request.body
    const tipo = Object.getOwnPropertyNames(cliente)
    clientes = clientes.filter(mamada => mamada[tipo] != cliente[tipo])
})

app.listen(5501)

console.log("server is running")

