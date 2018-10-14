const express = require("express");
const server = express();
const port = 3000;

server
  .route("/clientes")
  .get((req, res) => res.send("Lista de Clientes"))
  .post((req, res) => res.send("Novo Cliente"))
  .put((req, res) => res.send("Altera Cliente"))
  .delete((req, res) => res.send("Exclui Cliente"));

server.listen(port, () => {
  console.log("Executando...");
});
