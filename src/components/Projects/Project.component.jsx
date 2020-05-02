import React, { Fragment } from "react";
import "./Projects.styles.scss";
import shortid from "shortid";
import myBetaImage from "../../img/my-beta.png";
import pathfindingImage from "../../img/pathfinding-visualizer.png";
import subscriptionManagerImage from "../../img/subscription-manager.png";

const Project = (props) => {
  let projectText;
  let projectImage;
  let websiteLink;
  let githubLink;

  // Choose which text, image, and links to render
  switch (props.project) {
    case "MyBeta": {
      projectText = (
        <Fragment>
          <span className="font-red">{props.project}</span> is a social website
          for indoor bouldering. Gyms upload routes and users submit video
          solutions to the routes.
        </Fragment>
      );
      projectImage = myBetaImage;
      websiteLink = "https://my-beta.herokuapp.com/";
      githubLink = "https://github.com/bmiyata/my-beta";
      break;
    }

    case "Pathfinding Racer": {
      projectText = (
        <Fragment>
          <span className="font-red">{props.project}</span> is a pathfinding
          visualizer. Choose two algorithms, build a maze, and watch as they try
          to find the finish first!
        </Fragment>
      );
      projectImage = pathfindingImage;
      websiteLink = "https://bmiyata.github.io/pathfinding-racer/";
      githubLink = "https://github.com/bmiyata/pathfinding-racer";
      break;
    }

    case "Subscription Manager": {
      projectText = (
        <Fragment>
          <span className="font-red">{props.project}</span> is an expense
          tracker. Users can summarize outgoing payments and track when payments
          are due.
        </Fragment>
      );
      projectImage = subscriptionManagerImage;
      websiteLink = "https://subscription-manager-william.herokuapp.com/";
      githubLink = "https://github.com/bmiyata/subscription-manager";
      break;
    }

    default:
      break;
  }

  const getRandomKey = () => {
    return shortid.generate();
  };

  return (
    <div
      key={getRandomKey()}
      className={`p-md projects-showcase__project font-about fadeIn`}
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
          <a href={websiteLink} className="btn btn-green">
            Visit Website
          </a>
          <a href={githubLink} className="btn btn-blue">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
