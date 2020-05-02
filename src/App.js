import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home/Home.component";
import Skills from "./components/Skills/Skills.component";
import Projects from "./components/Projects/Projects.component";

const App = () => {
  return (
    <Fragment>
      <Home />
      <Skills />
      <Projects />
    </Fragment>
  );
};

export default App;
