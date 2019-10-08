import React,{ useEffect } from "react";

export default function ToDoFooter (props) {
    useEffect( () => {
    props.show();
    });
    return (
      <div className="footer">
        <button name="all" className="button" onClick={props.showAll}>
          All
        </button>
        <button
          name="active"
          className="button"
          onClick={props.showActive}
        >
          Active
        </button>
        <button
          name="completed"
          className="button"
          onClick={props.showCompleted}
        >
          Completed
        </button>
        {props.completed}/ {props.total}
        {props.completed !== 0 && (
          <button name="clear" className="button" onClick={props.clear}>
            Clear
          </button>
        )}
      </div>
    );
  }
