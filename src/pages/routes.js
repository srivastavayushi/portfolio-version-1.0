import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// components
import Home from "../components/home";
import Index from "./index";
import Nav from "../components/nav";
import About from "../components/about";
import Skills from "../components/skills";
import MainProjects from "../components/MainProjects";
import Communities from "../components/communities";

export default function Routes() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={MainProjects} />
          <Route exact path="/community" component={Communities} />
        </Switch>
      </Router>
    </>
  );
}
