import React from "react";
import myimg from "../myimg.jpg";
import myimg2 from "../myimg2.jpg";
import Button from "./Button";
import mysqlworkbench_93532 from "../mysqlworkbench_93532.svg";
import vbaSvg from "../vba-svgrepo-com.svg";
import djnagoSvg from "../django-svgrepo-com.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faSass,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import "./about.scss";

const About = () => {
  return (
    <div className="container-about">
      <div className="icons-skills">
        <FontAwesomeIcon className="icon" icon={faHtml5} />
        <FontAwesomeIcon className="icon" icon={faSass} />
        <FontAwesomeIcon className="icon" icon={faJs} />
        <FontAwesomeIcon className="icon" icon={faReact} />
        <div className="box-icon">
          <img src={mysqlworkbench_93532} alt="mysql" />
        </div>
        <div className="box-icon">
          <img src={djnagoSvg} alt="djnagoSvg" />
        </div>
      </div>
      <div className="box-img">
        <img src={myimg2} alt="Grzegorz Dużyński" />
      </div>
      <div className="box-about">
        <h2 className="title">I'm Frontend</h2>
        <h3 className="title-position">Developer</h3>
        <p className="text">
          Zmiana jest moim paliwem, a osiągnięte sukcesy stanowią napęd do
          nieustannego doskonalenia. Jestem gotów dołączyć do zespołu, który
          pozwoli mi rozwijać moje umiejętności programistyczne, a jednocześnie
          pomaga tworzyć wartość, która przyczynia się do pozytywnej przemiany
          otaczającego świata. To dla mnie nie tylko praca, to realizacja mojej
          pasji
        </p>
        <Button>Download CV</Button>
      </div>
    </div>
  );
};

export default About;
