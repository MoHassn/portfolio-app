import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Header />
      </Route>
      <main>
        <Route exact path="/">
          <About />
          <Projects />
          <Contact />
        </Route>
      </main>
      <footer>Made with ♥.</footer>
    </div>
  );
}

export default App;
