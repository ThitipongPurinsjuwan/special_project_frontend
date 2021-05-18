import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Common from "./common/Common";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Common />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
