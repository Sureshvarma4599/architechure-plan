import React from "react";
import './button.css'
// Reusable Button Component
const Button = ({ label, onClick, type = "primary" }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
