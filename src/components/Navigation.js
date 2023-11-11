import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  console.log(isNavOpen);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    });

    return () =>
      window.removeEventListener("resize", () => {
        if (window.innerWidth >= 768) {
          setIsNavOpen(true);
        } else {
          setIsNavOpen(false);
        }
      });
  }, window);

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
