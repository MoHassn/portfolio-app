import React from "react";
import Header from "./components/Header";
import tirbutePage from "./images/tribute-page.png";
import surveyForm from "./images/suvey-form.png";
import documentationPage from "./images/documentaion-page.png";
import prevPortfolio from "./images/previous-portfolio.png";
import landingPage from "./images/product-landing.png";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about">
          <h1 className="main-heading">Hi, I am HASSAN</h1>
          <h2 className="title">FRONT-END WEB DEVELOPER</h2>
          <p className="bio">
            My name is Mohamed Hassan. I am a computer and systems engineering
            student and front-end web developer. I've been coding for the last
            three years.
          </p>
        </section>
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
        <section id="contact">
          <h2 className="contact-header">Sure, happy to contact me!</h2>
          <ul className="contact-list">
            <li>
              <a
                className="contact-link"
                href="https://twitter.com/MuhmdHassn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="contact-link"
                href="https://github.com/MoHassn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer>Made with ♥.</footer>
    </div>
  );
}

export default App;
