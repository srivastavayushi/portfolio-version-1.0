import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// components
import Home from "../components/home";
import Index from "./index";
import Nav from "../components/nav";
import About from "../components/about";
import Skills from "../components/skills";
import AllProjects from "../components/allProjects";
import Communities from "../components/communities";
import Contact from "../components/contact";

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
          <Route exact path="/projects" component={AllProjects} />
          <Route exact path="/experience" component={Communities} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}
