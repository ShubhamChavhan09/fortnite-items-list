import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import About from "./components/About";
// import Profile from "./components/Profile";
// import Home from "./components/Home";
// import ItemDetail from "./components/ItemDetail";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Profile = lazy(() => import("./components/Profile"));
const ItemDetail = lazy(() => import("./components/ItemDetail"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/:id" component={ItemDetail} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
