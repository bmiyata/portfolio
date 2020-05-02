import React, { useState } from "react";

import sprite from "../../sprite.svg";
import "./Projects.styles.scss";

const Projects = () => {
  const [currentTab, setCurrentTab] = useState("mybeta");
  console.log(currentTab);
  return (
    <section className="projects-section grid-projects">
      <h1 className="font-projects-heading">
        Websites I've Built, From Wireframes to Deployment
      </h1>
      <div className="projects-showcase">
        <div
          onClick={() => setCurrentTab("mybeta")}
          className={`projects-showcase__mybeta pointer ${
            currentTab === "mybeta" ? "" : "border-bottom"
          }`}
        >
          <svg className="icon-tiny">
            <use href={sprite + "#rope"}></use>
          </svg>
          <p className="font-secondary">MyBeta</p>
        </div>
        <div
          onClick={() => setCurrentTab("pathfinding-racer")}
          className={`projects-showcase__pathfinding-racer pointer ${
            currentTab === "pathfinding-racer" ? "" : "border-bottom"
          }`}
        >
          <svg className="icon-tiny">
            <use href={sprite + "#entertainment"}></use>
          </svg>
          <p className="font-secondary">Pathfinding Racer</p>
        </div>
        <div
          onClick={() => setCurrentTab("subscription-manager")}
          className={`projects-showcase__subscription-manager pointer ${
            currentTab === "subscription-manager" ? "" : "border-bottom"
          }`}
        >
          <p className="font-secondary">Subscription Manager</p>
        </div>
        <div className="p-md projects-showcase__project font-about">
          <h1>About</h1>
          <p className="font-secondary">
            MyBeta is a social website for indoor bouldering. Gyms upload routes
            and users submit video solutions to the routes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
