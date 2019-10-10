import React from "react";
import "../css/Filter.css";
import Button from "./Button";

function Filter({ setFilter, activeFilter }) {
  console.log("Filter active filter", activeFilter);
  return (
    <div className="list-filter-container">
      <Button
        active={activeFilter === 0}
        onClick={() => setFilter(v => v !== undefined, 0)}
        text="All"
      />
      <Button
        active={activeFilter === 1}
        onClick={() => {
          setFilter(v => v !== undefined && !v.checked, 1);
        }}
        text="Active"
      />
      <Button
        active={activeFilter === 2}
        onClick={() => setFilter(v => v !== undefined && v.checked, 2)}
        text="Completed"
      />
    </div>
  );
}

export default Filter;
