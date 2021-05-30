import React from "react";

//IMPORT
import Home from "../components/home";
import Nav from "../components/nav";
import About from "../components/about";
import Skills from "../components/skills";
import MainProjects from "../components/MainProjects";
import SideProjects from "../components/SideProjects";
import Communities from "../components/communities";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Index() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <MainProjects />
      <SideProjects />
      <Communities />
      <Contact />
      <Footer />
    </div>
  );
}
