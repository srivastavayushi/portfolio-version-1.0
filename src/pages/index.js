import React from "react";

//IMPORT
import Home from "../components/home";
import About from "../components/about";
import Skills from "../components/skills";
import MainProjects from "../components/MainProjects";
import SideProjects from "../components/SideProjects";
import Communities from "../components/communities";

export default function Index() {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <MainProjects />
      <SideProjects />
      <Communities />
    </div>
  );
}
