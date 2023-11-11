import React from "react";
import "./button.scss";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${"btn-component"} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
