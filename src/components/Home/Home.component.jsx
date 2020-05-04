import React from "react";
import "./Home.styles.scss";

import SideNavigation from "../SideNavigation/SideNavigation.component";
import sprite from "../../sprite.svg";

const Home = () => {
  return (
    <section id="home-section" className="home-section grid-home">
      <SideNavigation />
      <svg className="abs-pos cloud-animation">
        <use href={sprite + "#clouds"}></use>
      </svg>
      <h1 className="text-center font-title">Nice To Meet You!</h1>
      <h3 className="text-center font-heading big-z">
        I'm <span className="font-red">William</span>, a fullstack developer
      </h3>
      <div className="grid-buttons">
        {/* <div className="pointer p-sm button-animation">
          <svg className="icon-lg">
            <use href={sprite + "#curriculum"}></use>
          </svg>
          <p className="font-secondary text-center">Resume</p>
        </div> */}
        <a
          href="https://github.com/bmiyata"
          className="pointer p-sm button-animation"
        >
          <svg className="icon-lg">
            <use href={sprite + "#github"}></use>
          </svg>
          <p className="font-secondary text-center">GitHub</p>
        </a>
      </div>
    </section>
  );
};

export default Home;
