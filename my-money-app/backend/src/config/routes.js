const express = require("express");
const auth = require("./auth");

module.exports = server => {
  const protectedApi = express.Router();
  server.use("/api", protectedApi);

  protectedApi.use(auth);

  // rotas de ciclo de pagamento
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(protectedApi, "/billingCycles");

  const openApi = express.Router();
  server.use("/oapi", openApi);

  const AuthService = require("../api/user/AuthService");
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);
};
