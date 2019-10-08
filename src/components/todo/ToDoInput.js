import React, { useState } from "react";
import "./input.scss";
export default function Input(props)  {
  const [text, setText] = useState("");
  
  let handleChange = e => {
    setText(e.target.value);
  };

  let handlePress = e => {
    if (e.key === "Enter" && text.length > 0) {
      props.addTodo(text);
      setText("");
    }
  };

    return (
      <div className="input">
        <input
          name="text"
          placeholder="Input text of the todo"
          type="text"
          value={text}
          onChange={handleChange}
          onKeyPress={handlePress}
        ></input>
      </div>
    );
  }
