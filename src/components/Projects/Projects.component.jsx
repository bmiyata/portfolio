import React, { useState } from "react";

import sprite from "../../sprite.svg";
import "./Projects.styles.scss";
import Project from "./Project.component";

const Projects = () => {
  const [currentTab, setCurrentTab] = useState("MyBeta");

  return (
    <section className="projects-section grid-projects">
      <h1 className="font-projects-heading">
        Websites I've Built, From Wireframes to Deployment
      </h1>
      <div className="projects-showcase">
        {/* TABS  */}
        <div
          onClick={() => {
            setCurrentTab("MyBeta");
          }}
          className={`projects-showcase__mybeta pointer ${
            currentTab === "MyBeta" ? "" : "border-bottom"
          }`}
        >
          <svg className="icon-tiny">
            <use href={sprite + "#rope"}></use>
          </svg>
          <p className="font-secondary">MyBeta</p>
        </div>
        <div
          onClick={() => setCurrentTab("Pathfinding Racer")}
          className={`projects-showcase__pathfinding-racer pointer ${
            currentTab === "Pathfinding Racer" ? "" : "border-bottom"
          }`}
        >
          <svg className="icon-tiny">
            <use href={sprite + "#entertainment"}></use>
          </svg>
          <p className="font-secondary">Pathfinding Racer</p>
        </div>
        <div
          onClick={() => setCurrentTab("Subscription Manager")}
          className={`projects-showcase__subscription-manager pointer ${
            currentTab === "Subscription Manager" ? "" : "border-bottom"
          }`}
        >
          <p className="font-secondary">Subscription Manager</p>
        </div>

        {/* PROJECT */}
        <Project animate={false} project={currentTab} />
      </div>
    </section>
  );
};

export default Projects;
