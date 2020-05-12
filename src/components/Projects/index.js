import React from "react";
import "./styles.css";

const projects = [
  {
    name: "Survey form",
    imgURL: "https://i.imgur.com/2odg6pk.png",
    codepen: "https://codepen.io/mohamedhassan/full/orKVbd",
    id: "1",
  },
  {
    name: "Tribute page",
    imgURL: "https://i.imgur.com/y7fJvSJ.png",
    codepen: "https://codepen.io/mohamedhassan/full/JQqaqW",
    id: "2",
  },
  {
    name: "Technical documentation page",
    imgURL: "https://i.imgur.com/xctsboO.png",
    codepen: "https://codepen.io/mohamedhassan/full/OKpdNR",
    id: "3",
  },
  {
    name: "My previous portfolio",
    imgURL: "https://i.imgur.com/8S4gGOQ.png",
    codepen: "https://codepen.io/mohamedhassan/full/wVpbLb",
    id: "4",
  },
  {
    name: "Product landing page",
    imgURL: "https://i.imgur.com/74oV2Ar.png",
    codepen: "https://codepen.io/mohamedhassan/full/aebqRv",
    id: "5",
  },
];

const Projects = () => {
  let projectsList = projects.length ? (
    projects.map(({ name, codepen, imgURL, id }) => (
      <Project name={name} codepen={codepen} imageURL={imgURL} key={id} />
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

const Project = ({ name, codepen, imageURL }) => {
  return (
    <figure className="project">
      <a href={codepen} target="_blank" rel="noopener noreferrer">
        <img
          className="project-image"
          src={imageURL}
          alt="survey form project sreenshot"
          width="300"
        />
      </a>
      <figcaption>{name}</figcaption>
    </figure>
  );
};
export default Projects;
