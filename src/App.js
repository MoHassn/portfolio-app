import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
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
