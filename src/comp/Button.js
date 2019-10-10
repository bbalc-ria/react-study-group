import React from "react";
import "../css/Button.css";

function Button({
  active,
  styleClass,
  visible = true,
  text = "Click",
  onClick
}) {
  return (
    <button
      className={`btn-style 
      ${active ? "btn-style-active" : ""} 
      ${styleClass} 
      ${!visible ? "btn-invisible" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
