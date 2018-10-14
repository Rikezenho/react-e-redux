import React from "react";
import { render } from "react-dom";

import Pai from "./components/pai";
import Filho from "./components/filho";

render(
  <div>
    <Pai nome="João" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Paulo" />
      <Filho nome="Carla" />
    </Pai>
  </div>,
  document.getElementById("root")
);
