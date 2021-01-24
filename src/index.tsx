import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App/App";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={["/en", "/es"]} component={App} />
      <Route path="*" render={() => <Redirect to="/en" />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
