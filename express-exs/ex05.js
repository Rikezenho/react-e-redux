const express = require("express");
const server = express();
const port = 3000;
const router = require("./ex05_routes.js");

server.use("/api", router);

server.listen(port, () => {
  console.log("Executando...");
});
