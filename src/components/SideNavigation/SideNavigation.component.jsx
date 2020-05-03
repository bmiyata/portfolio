import React, { useState, useEffect } from "react";
import "./SideNavigation.styles.scss";

import sprite from "../../sprite.svg";

const SideNavigation = () => {
  const [active, setActive] = useState("Home");
  const [topOfSkills, setTopOfSkills] = useState(0);
  const [topOfProjects, setTopOfProjects] = useState(0);

  // Throttles the scroll listener because firing when smooth scrolling
  const throttle = (fn, wait) => {
    let time = Date.now();
    return () => {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  };

  const callback = () => {
    const topOfProjects = document.getElementById("projects-section").offsetTop;
    const topOfSkills = document.getElementById("skills-section").offsetTop;

    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 50
    ) {
      if (active !== "Contact") {
        setActive("Contact");
      }
    } else if (window.scrollY >= topOfProjects - 100) {
      if (active !== "Projects") {
        setActive("Projects");
      }
    } else if (window.scrollY >= topOfSkills - 100) {
      if (active !== "Skills") {
        setActive("Skills");
      }
    } else {
      setActive("Home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", throttle(callback, 0));
  }, []);

  useEffect(() => {
    setTopOfSkills(document.getElementById("skills-section").offsetTop);
    setTopOfProjects(document.getElementById("projects-section").offsetTop);
  }, []);

  return (
    <div className="side-navigation p-side-nav text-center">
      {/* HOME */}
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={`circle ${active === "Home" ? "circle-active" : ""}`}
      >
        <div className="big-z">
          <svg className="icon-side-nav">
            <use href={sprite + "#house"}></use>
          </svg>
          <p className="font-secondary text-center">Home</p>
        </div>
      </div>
      <div className="line"></div>
      {/* SKILLS */}
      <div
        onClick={() => {
          window.scrollTo({
            top: topOfSkills + 20,
            behavior: "smooth",
          });
        }}
        className={`circle ${active === "Skills" ? "circle-active" : ""}`}
      >
        <div className="big-z">
          <svg className="icon-side-nav">
            <use href={sprite + "#toolbox"}></use>
          </svg>
          <p className="font-secondary text-center">Skills</p>
        </div>
      </div>
      <div className="line"></div>
      {/* PROJECTS */}
      <div
        onClick={() => {
          window.scrollTo({
            top: topOfProjects + 20,
            behavior: "smooth",
          });
        }}
        className={`circle ${active === "Projects" ? "circle-active" : ""}`}
      >
        <div className="big-z">
          <svg className="icon-side-nav">
            <use href={sprite + "#computer"}></use>
          </svg>
          <p className="font-secondary text-center">Projects</p>
        </div>
      </div>
      <div className="line"></div>
      {/* CONTACT */}
      <div
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }}
        className={`circle ${active === "Contact" ? "circle-active" : ""}`}
      >
        <div className="big-z">
          <svg className="icon-side-nav">
            <use href={sprite + "#email"}></use>
          </svg>
          <p className="font-secondary text-center">Contact Me</p>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
