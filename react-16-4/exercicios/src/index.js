import React from "react";
import { render } from "react-dom";
import Saudacao from "./components/saudacao";

render(
  <Saudacao tipo="Bom dia" nome="João" />,
  document.getElementById("root")
);
