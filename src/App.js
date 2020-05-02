import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home/Home.component";
import Skills from "./components/Skills/Skills.component";
import Projects from "./components/Projects/Projects.component";
import Contact from "./components/Contact/Contact.component";

const App = () => {
  return (
    <Fragment>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default App;
