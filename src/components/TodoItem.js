import React from 'react';

class Item extends React.Component {
  render() {
    const { id, completed, name, handleChange } = this.props;
    console.log("completed", completed);
    return (
      <li>
        <input type="checkbox" id={id} checked={completed} onChange={(event) => handleChange(event)} /> {name}
      </li>
    );
  }
}
export default Item