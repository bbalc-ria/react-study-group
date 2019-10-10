import React from "react";
import "../css/Filter.css";
import Button from "./Button";

function Filter({ setFilter, activeFilter }) {
  return (
    <div className="list-filter-container">
      <Button
        active={activeFilter === 0}
        onClick={() => setFilter(v => v)}
        text="All"
      />
      <Button
        active={activeFilter === 1}
        onClick={() => {
          setFilter(v => {
            console.log("Btn active", v);
            return !v.checked;
          });
        }}
        text="Active"
      />
      <Button
        active={activeFilter === 2}
        onClick={() => setFilter(v => v.checked)}
        text="Completed"
      />
    </div>
  );
}

export default Filter;
