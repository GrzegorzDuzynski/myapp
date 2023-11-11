import React from "react";
import "./Popup.scss";

const Popup = ({ children, className, onClick, classNameButton }) => {
  return (
    <div className={className}>
      <button className="btn-close" onClick={onClick}>
        x
      </button>
      {children}
    </div>
  );
};

export default Popup;
