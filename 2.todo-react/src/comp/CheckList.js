import React from 'react';
import '../css/CheckList.css';
import ListItem from './ListItem'

class CheckList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: []
    };

    this.onInputeChanged = this.onInputeChanged.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.createList = this.createList.bind(this);
    this.checkListItem = this.checkListItem.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.onInputKeyPress = this.onInputKeyPress.bind(this);
  }

  deleteListItem(key) {
    console.log("Delete list item " + key);
    this.state.items.splice(key, 1);
    this.setState(this.state);
  }

  checkListItem(key) {
    console.log("Check list item " + key);
    const item = this.state.items[key]
    console.log("Check item " + item);
    item.checked = !item.checked;
    this.setState(this.state);
  }

  addListItem() {
    console.log("Add list item " + this.state.value);
    this.state.items.push({ value: this.state.value, checked: false });
    this.setState(this.state);
  }

  createList() {
    const items = this.state.items.map((v, i) =>
      <li key={i}>
        <ListItem index={i} value={v.value} checked={v.checked} onCheck={this.checkListItem} onDelete={this.deleteListItem} />
      </li>
    );
    console.log("Items count " + items.length)

    return (
      <ul>{items}</ul>
    );
  }

  onInputeChanged(event) {
    console.log("Input changed " + event.target.value);
    this.setState({ value: event.target.value });
  }

  onInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.addListItem();
    }
  }

  render() {
    return (
      <div className="list">
        <div className="input-container">
          <input onChange={this.onInputeChanged} onKeyPress={this.onInputKeyPress} />
        </div>
        {this.createList()}
      </div>
    );
  }
}

export default CheckList;
