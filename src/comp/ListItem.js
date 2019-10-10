import React from "react";
import "../css/ListItem.css";
import Checkbox from "./Checkbox";

function ListItem({ onCheck, onDelete, index, checked, text }) {
  return (
    <li className="list-row">
      <Checkbox checked={checked} onCheck={onCheck} index={index} />
      <label className={checked ? "row-label grayout" : "row-label"}>
        {text}
      </label>
      <button className="box box-delete" onClick={() => onDelete(index)} />
    </li>
  );
}

export default ListItem;
