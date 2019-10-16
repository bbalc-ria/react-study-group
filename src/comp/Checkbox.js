import React from "react";
import "../css/Checkbox.css";

function Checkbox({ index = 0, checked, onCheck, visible = true }) {
  return (
    <input
      type="checkbox"
      disabled={!visible}
      onChange={(v) => onCheck(index, v.target.checked)}
      checked={checked}
      className={`checkbox ${visible ? "" : "checkbox-grayout"}`}
    />
  );
}

export default Checkbox;
