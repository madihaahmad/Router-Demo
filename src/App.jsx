import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Error from "./components/error";
import Header from "./components/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
