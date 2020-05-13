import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Survey form",
    description:
      "This is a project description and I will customize it later, thank you!",
    imgURL: "https://i.imgur.com/2odg6pk.png",
    codepen: "https://codepen.io/mohamedhassan/full/orKVbd",
    id: "1",
  },
  {
    name: "Tribute page",
    description:
      "This is a project description and I will customize it later, thank you!",
    imgURL: "https://i.imgur.com/y7fJvSJ.png",
    codepen: "https://codepen.io/mohamedhassan/full/JQqaqW",
    id: "2",
  },
  {
    name: "Technical documentation page",
    description:
      "This is a project description and I will customize it later, thank you!",
    imgURL: "https://i.imgur.com/xctsboO.png",
    codepen: "https://codepen.io/mohamedhassan/full/OKpdNR",
    id: "3",
  },
  {
    name: "My previous portfolio",
    description:
      "This is a project description and I will customize it later, thank you!",
    imgURL: "https://i.imgur.com/8S4gGOQ.png",
    codepen: "https://codepen.io/mohamedhassan/full/wVpbLb",
    id: "4",
  },
  {
    name: "Product landing page",
    description:
      "This is a project description and I will customize it later, thank you!",
    imgURL: "https://i.imgur.com/74oV2Ar.png",
    codepen: "https://codepen.io/mohamedhassan/full/aebqRv",
    id: "5",
  },
];

const Projects = () => {
  let projectsList = projects.length ? (
    projects.map(({ name, imgURL, id }) => (
      <Project name={name} imageURL={imgURL} id={id} key={id} />
    ))
  ) : (
    <div>sorry, couldn't fetch projects</div>
  );
  return (
    <section id="projects">
      <h2 className="projects-heading">And these are some of my works</h2>
      <div className="projects-container">{projectsList}</div>
    </section>
  );
};

const Project = ({ name, imageURL, id }) => {
  return (
    <div className="project">
      <Link to={`projects/${id}`} className="project-link">
        <figure className="project">
          <img
            className="project-image"
            src={imageURL}
            alt="survey form project sreenshot"
            width="300"
          />
          <figcaption>{name}</figcaption>
        </figure>
      </Link>
    </div>
  );
};
export default Projects;
