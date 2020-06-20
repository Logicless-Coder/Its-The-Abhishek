import React from "react";
import "./App.css";

import "./Fonts/Heroes.woff";

// Other Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
