/* eslint-disable global-require */
import React from "react";
import routes from "./routes";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Switch>{routes}</Switch>
      </div>
    </div>
  );
}

export default App;
