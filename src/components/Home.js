import React from "react";
import kodimg from "../kod.png";
import hero3img from "../webhero3_Easy-Resize.com.jpg";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container-home">
      <div className="box-info">
        <h1 className="title">WSPÓLNIE TWÓRZMY NOWĄ WARTOŚĆ</h1>
        <p className="text">
          Jeśli rozważasz stworzenie nowoczesnej strony internetowej lub
          odświeżenie swojej obecnej witryny, to chętnie służę pomocą w
          realizacji Twoich celów.
        </p>
        <Button className="button-shine" onClick={() => navigate("/contact")}>
          Porozmawiajmy
        </Button>
      </div>
      <div className="box-img">
        <img src={hero3img} alt="kod" />
      </div>
    </div>
  );
};

export default Home;
