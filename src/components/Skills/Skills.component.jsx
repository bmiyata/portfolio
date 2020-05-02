import React from "react";

import "./Skills.styles.scss";
import sprite from "../../sprite.svg";

const Skills = () => {
  return (
    <section className="skills-section grid-skills">
      <h1 className="font-skills-heading">Technologies I've Worked With</h1>
      <div className="grid-technologies">
        {/* FRONT-END TITLE */}
        <div className="p-sm grid-technologies__front-end-logo">
          <p className="font-secondary purple">Front-End</p>
          <svg className="mt-tiny icon-lg">
            <use href={sprite + "#programming"}></use>
          </svg>
        </div>
        {/* BACK-END TITLE */}
        <div className="p-sm grid-technologies__back-end-logo">
          <p className="font-secondary purple">Back-End</p>
          <svg className="mt-tiny icon-md">
            <use href={sprite + "#server"}></use>
          </svg>
        </div>
        {/* FRONT-END ICONS */}
        <div className="p-sm grid-technologies__front-end-icons">
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#html-5"}></use>
            </svg>
            <p className="font-secondary">HTML</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#css-3"}></use>
            </svg>
            <p className="font-secondary">CSS</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#js"}></use>
            </svg>
            <p className="font-secondary">JavaScript</p>
          </div>
          <div>
            <svg className="icon-sm react-blue">
              <use href={sprite + "#iconfinder-reactjs-logo-1174949"}></use>
            </svg>
            <p className="font-secondary">React</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#redux"}></use>
            </svg>
            <p className="font-secondary">Redux</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#sass-1"}></use>
            </svg>
            <p className="font-secondary">Sass</p>
          </div>
        </div>
        {/* BACK-END ICONS */}
        <div className="p-sm grid-technologies__back-end-icons">
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#logos"}></use>
            </svg>
            <p className="font-secondary">Node.js</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#expressjs-ar21"}></use>
            </svg>
            <p className="font-secondary">Express</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#jwtio-json-web-token"}></use>
            </svg>
            <p className="font-secondary">JWT</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#mongodb-1"}></use>
            </svg>
            <p className="font-secondary">MongoDB</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#postman"}></use>
            </svg>
            <p className="font-secondary">Postman</p>
          </div>
          <div>
            <svg className="icon-sm">
              <use href={sprite + "#icons8-firebase"}></use>
            </svg>
            <p className="font-secondary">Firebase</p>
          </div>
        </div>
        <div className="p-sm grid-technologies__utils-deployment">
          <p className="font-secondary purple">Utilities/Deployment</p>
          <div className="grid-util-logos">
            <div>
              <svg className="icon-sm">
                <use href={sprite + "#yarn-seeklogocom"}></use>
              </svg>
              <p className="font-secondary">Yarn</p>
            </div>
            <div>
              <svg className="icon-sm">
                <use href={sprite + "#iconfinder-npm-4691529"}></use>
              </svg>
              <p className="font-secondary">npm</p>
            </div>
            <div>
              <svg className="icon-sm">
                <use href={sprite + "#icons8-git"}></use>
              </svg>
              <p className="font-secondary">Git</p>
            </div>
            <div>
              <svg className="icon-sm">
                <use href={sprite + "#icons8-heroku"}></use>
              </svg>
              <p className="font-secondary">Heroku</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
