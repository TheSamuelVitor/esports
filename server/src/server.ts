// importando uma dependencia

// -- de uma forma antiga
// o arquivo pode ser apenas ".js"
// const express = require('express');

// -- de uma forma mais nova
// ECMAScript Modules
// o arquivo deve ser ".mjs"
import express, { request, response } from "express";

// inicializando o app com express
const app = express();

app.get("/games", (request, response) => {
  return response.status(201).json([
    {
      id: 1,
      name: "CS: GO",
    },
    {
      id: 2,
      name: "Lol",
    },
    {
      id: 3,
      name: "Valorant",
    },
    {
      id: 4,
      name: "GTA Vice City",
    },
  ]);
});

app.get("/ads", (request, response) => {
  console.log("Acessou /ads");
  return response.status(200).json([
    {
      id: 1,
      name: "Anuncio 1",
    },
    {
      id: 2,
      name: "Anuncio 2",
    },
    {
      id: 3,
      name: "Anuncio 3",
    },
    {
      id: 4,
      name: "Anuncio 4",
    },
  ]);
});

app.post("/ads", (request, response) => {
  return response.status(202).json([
    {
      message: "created",
    },
  ]);
});

// passando a rota para o aplicativo rodar
app.listen(3000);
