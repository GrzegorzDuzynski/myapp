import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [windowScreen, setwindowScreen] = useState(window);

  const windowScreen = window;

  console.log(isNavOpen);

  useEffect(() => {
    if (windowScreen.innerWidth >= 768) {
      setIsNavOpen(true);
    }
    windowScreen.addEventListener("resize", () => {
      if (windowScreen.innerWidth >= 768) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    });

    return () =>
      windowScreen.removeEventListener("resize", () => {
        if (windowScreen.innerWidth >= 768) {
          setIsNavOpen(true);
        } else {
          setIsNavOpen(false);
        }
      });
  }, [windowScreen]);

  const handlerNavMenu = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="box-nav">
      <div className="hamburger" onClick={handlerNavMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isNavOpen && (
        <nav>
          <ul className="list-item">
            <li>
              <Link className="item" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="item" to="/about">
                O mnie
              </Link>
            </li>
            <li>
              <Link className="item" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="item" to="/contact">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
