import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";

const Card = ({
  onClick,
  img,
  productName,
  price,
  description,
  newCard,
  isFavorite,
}) => {
  return (
    <div className="card">
      {newCard && (
        <div className="box-new">
          <p className="text-new">NEW</p>
        </div>
      )}
      <div
        style={{
          height: "270px",
          width: "240px",
          borderRadius: "120px 120px 0 0",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: "0.6",
          position: "absolute",
          top: 0,
          left: 0,
          borderBottom: "2px solid gray",
        }}
      ></div>

      <div className="box-heart" onClick={onClick}>
        {isFavorite ? (
          <FontAwesomeIcon
            className="icon"
            style={{ color: "rgb(153, 237, 27)" }}
            icon={faHeart}
          />
        ) : (
          <FontAwesomeIcon className="icon" icon={faHeart} />
        )}
      </div>
      {isFavorite ? (
        <div className="box-favorite">
          <p className="text">Dodano do ulubionych</p>
        </div>
      ) : null}
      <div className="box">
        <div className="title">{productName}</div>
        <div className="box-price">
          <p className="text-price">{price}</p>
        </div>
        <div className="box-description">
          <p className="text-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
