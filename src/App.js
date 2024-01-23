import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Navigation from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

import "./reset.scss";
import "./normalize.scss";
import "./App.scss";

function App() {
  const navigate = useNavigate();
  return (
    <div className="container-all">
      <header>
        <div className="container-header">
          <div className="box-company">
            <h3 className="title">
              GD <span className="span">Developer</span>
            </h3>
          </div>
          <Navigation />
        </div>
      </header>
      <main>
        <div className="container-main">
          <div className="circle"></div>
          <div className="circle-two"></div>
          <div className="circle-three"></div>
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} /> */}
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div className="container-footer">
          <div className="box-socials">
            <FontAwesomeIcon
              onClick={() => navigate("/contact")}
              className="icon"
              icon={faEnvelope}
            />
            <FontAwesomeIcon
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/grzegorz-du%C5%BCy%C5%84ski-52584197/";
              }}
              className="icon"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              onClick={() => {
                window.location.href = "https://github.com/GrzegorzDuzynski";
              }}
              className="icon"
              icon={faGithub}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
