const express = require("express");
const server = express();
const port = 3000;

server.use("/api", (req, res, next) => {
  console.log("Inicio...");
  next();
  console.log("Fim...");
});

server.use("/api", (req, res) => {
  console.log("Resposta...");
  res.send("<h1>Olá API!</h1>");
});

server.listen(port, () => {
  console.log("Executando...");
});
