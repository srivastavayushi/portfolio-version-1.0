import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// components
import Home from "../components/home";
import Nav from "../components/nav";
import About from "../components/about";
import Skills from "../components/skills";
import MainProjects from "../components/MainProjects";
import Communities from "../components/communities";
import Contact from "../components/contact";


export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={MainProjects} />
          <Route exact path="/community" component={Communities} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}
