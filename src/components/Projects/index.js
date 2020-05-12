import React from "react";
import tirbutePage from "./imgs/tribute-page.png";
import surveyForm from "./imgs/suvey-form.png";
import documentationPage from "./imgs/documentaion-page.png";
import prevPortfolio from "./imgs/previous-portfolio.png";
import landingPage from "./imgs/product-landing.png";
import "./styles.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-heading">And these are some of my works</h2>
      <div className="projects-container">
        <figure className="project">
          <a
            href="https://codepen.io/mohamedhassan/full/orKVbd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-image"
              src={surveyForm}
              alt="survey form project sreenshot"
              width="300"
            />
          </a>
          <figcaption>Survey form</figcaption>
        </figure>
        <figure className="project">
          <a
            href="https://codepen.io/mohamedhassan/full/JQqaqW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-image"
              src={tirbutePage}
              alt="tribute page project screenshot"
              width="300"
            />
          </a>
          <figcaption>Tribute page</figcaption>
        </figure>
        <figure className="project">
          <a
            href="https://codepen.io/mohamedhassan/full/OKpdNR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-image"
              src={documentationPage}
              alt="documentation page project  screenshot"
              width="300"
            />
          </a>
          <figcaption>Technical documentation page</figcaption>
        </figure>
        <figure className="project">
          <a
            href="https://codepen.io/mohamedhassan/full/wVpbLb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-image"
              src={prevPortfolio}
              alt="previous protfolio project screenshot"
              width="300"
            />
          </a>
          <figcaption>My previous portfolio</figcaption>
        </figure>
        <figure className="project">
          <a
            href="https://codepen.io/mohamedhassan/full/aebqRv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="project-image"
              src={landingPage}
              alt="landing page project screenshot"
              width="300"
            />
          </a>
          <figcaption>Product landing page</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Projects;
