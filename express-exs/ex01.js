const express = require("express");
const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.send("<h1>Index!</h1>");
});

server.all("/teste", (req, res) => {
  res.send("<h1>Teste!</h1>");
});

server.get(/api/, (req, res) => {
  res.send("<h1>API!</h1>");
});

server.listen(port, () => {
  console.log("Executando...");
});
