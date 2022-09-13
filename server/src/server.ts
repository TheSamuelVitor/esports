// importando uma dependencia 

// -- de uma forma antiga
// o arquivo pode ser apenas ".js"
// const express = require('express');

// -- de uma forma mais nova
// ECMAScript Modules
// o arquivo deve ser ".mjs"
import express from "express"

// inicializando o app com express 
const app = express()

var nomes = ["Samuel", "Vitor", "Franca"]

// ao usuario acessar o /adds na rota ele recebe o que a rota passar
app.get("/ads", (request, response) => {
    console.log("Acessou /ads")
    return response.json([
        {
            id: 1,
            name: "CS: GO"
        },
        {
            id: 2,
            name: "Lol"
        },
        {
            id: 3,
            name: "Valorant"
        },
        {
            id: 4,
            name: "GTA Vice City"
        },
    ])
})

app.get("/nomes", (req, res) => {
    console.log("Acessou /nome")
    return res.json(nomes)
})

// passando a rota para o aplicativo rodar
app.listen(3000)