import React, { Fragment, useEffect, useState } from "react";
import "./Projects.styles.scss";
import myBetaImage from "../../img/my-beta.png";
import pathfindingImage from "../../img/pathfinding-visualizer.png";
import subscriptionManagerImage from "../../img/subscription-manager.png";

const Project = (props) => {
  let projectText;
  let projectImage;

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, []);

  switch (props.project) {
    case "MyBeta": {
      projectText = (
        <Fragment>
          <span class="font-red">{props.project}</span> is a social website for
          indoor bouldering. Gyms upload routes and users submit video solutions
          to the routes.
        </Fragment>
      );
      projectImage = myBetaImage;
      break;
    }

    case "Pathfinding Racer": {
      projectText = (
        <Fragment>
          <span class="font-red">{props.project}</span> is a pathfinding
          visualizer. Choose two algorithms, build a maze, and watch as they try
          to find the finish first!
        </Fragment>
      );
      projectImage = pathfindingImage;
      break;
    }

    case "Subscription Manager": {
      projectText = (
        <Fragment>
          <span class="font-red">{props.project}</span> is an expense tracker.
          Users can summarize outgoing payments and track when payments are due.
        </Fragment>
      );
      projectImage = subscriptionManagerImage;
      break;
    }

    default:
      break;
  }
  console.log(animate);
  return (
    <div
      className={`p-md projects-showcase__project font-about ${
        animate ? "fadeIn" : ""
      }`}
    >
      <h1>About</h1>
      <p className="font-project mt-sm">{projectText}</p>
      <div className="mt-sm project-content">
        <img
          className="project-content__image"
          src={projectImage}
          alt="Project"
        />
        <div className="project-content__btns">
          <button className="btn btn-green">Visit Website</button>
          <button className="btn btn-blue">Source Code</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
