import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "rebass";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../shared/App";
import theme from "../shared/theme";

hydrate(
  <Router>
    <Provider theme={theme}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("app")
);
