import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Profile from "./components/Profile";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/:id" component={ItemDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
