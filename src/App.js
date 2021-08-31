import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import E404 from "./error/404";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/project" component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={E404} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
