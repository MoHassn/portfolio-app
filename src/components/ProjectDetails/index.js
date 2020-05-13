import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";

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

const ProjectDetails = () => {
  let { id } = useParams();

  const [project] = projects.filter((project) => project.id === id);

  return (
    <div className="project-details-container">
      <h2 className="project-name">{project.name}</h2>
      <div className="project-details">
        <div>
          <img
            className="project-img"
            src={project.imgURL}
            alt="a screenshot from the project"
          />
        </div>
        <div className="description-container">
          <p className="project-description">{project.description}</p>
          <a
            className="codepen-button"
            href={project.codepen}
            target="_blank"
            rel="noopener noreferrer"
          >
            Codepen
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
