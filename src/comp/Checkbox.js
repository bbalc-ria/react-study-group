import React from "react";
import "../css/Checkbox.css";

function Checkbox({ index = 0, checked, onCheck, visible = true }) {
  return (
    <input
      type="checkbox"
      disabled={!visible}
      onChange={() => onCheck(index)}
      checked={checked}
      className={`checkbox ${visible ? "" : "checkbox-grayout"}`}
    />
  );
}

export default Checkbox;
