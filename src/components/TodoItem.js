import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { completed: this.props.completed };

    this.handleChange = this.handleChange.bind(this);

  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ completed: !this.state.completed });
  };

  render() {
    const { id, completed, name } = this.props;
    return (
      <li>
        <input type="checkbox" id={id} checked={this.state.completed} onChange={this.handleChange} /> {name}
      </li>
    );
  }
}
export default Item