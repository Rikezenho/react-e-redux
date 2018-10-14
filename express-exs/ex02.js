const express = require("express");
const server = express();
const port = 3000;

server.get("/", (req, res, next) => {
  console.log("Inicio...");
  next();
  console.log("Fim...");
});

server.get("/", (req, res) => {
  console.log("Resposta...");
  res.send("<h1>Olá Express!</h1>");
});

server.listen(port, () => {
  console.log("Executando...");
});
