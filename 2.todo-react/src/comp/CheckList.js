import React from 'react';
import '../css/CheckList.css';
import ListItem from './ListItem'
import Footer from './Footer'
import { stat } from 'fs';

class CheckList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: []
    };

    this.onInputChanged = this.onInputChanged.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.createList = this.createList.bind(this);
    this.checkListItem = this.checkListItem.bind(this);
    this.onInputKeyPress = this.onInputKeyPress.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.filterActive = this.filterActive.bind(this);
    this.filterComp = this.filterComp.bind(this);
  }

  deleteListItem = (key) => {
    console.log("Delete list item " + key);
    this.state.items.splice(key, 1);
    this.setState(this.state);
  }

  checkListItem(key) {
    console.log("Check list item " + key);
    let items = this.state.items;
    let item = items.find((v, i) => i === key);

    item.checked = !item.checked;
    items[key] = item;

    this.setState({ items: items });
  }

  addListItem() {
    console.log("Add list item " + this.state.value);
    this.state.items.push({ value: this.state.value, checked: false, hide: false });
    this.setState(this.state);
  }

  createList() {
    const items = this.state.items.map((v, i) => {
      if (v.hide === false) {
        return (<ListItem key={i} index={i} value={v.value} checked={v.checked} onCheck={this.checkListItem} onDelete={this.deleteListItem} />)
      }
    });
    console.log("Items count " + items.length)

    return (
      <ul>{items}</ul>
    );
  }

  onInputChanged(event) {
    console.log("Input changed " + event.target.value);
    this.setState({ value: event.target.value });
  }

  onInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.addListItem();
    }
  }

  filterAll() {
    for (let index = 0; index < this.state.items.length; index++) {
      this.state.items[index].hide = false;
    }
    this.setState(this.state);
  }

  filterActive() {
    for (let index = 0; index < this.state.items.length; index++) {
      const item = this.state.items[index];
      item.hide = item.checked;
      console.log("Hide ", item.hide);
    }
    this.setState(this.state);
  }

  filterComp() {
    for (let index = 0; index < this.state.items.length; index++) {
      const item = this.state.items[index];
      item.hide = !item.checked;
      console.log("Hide ", item.hide);
    }
    this.setState(this.state);
  }

  getCount() {
    let count = 0;
    this.state.items.map((v, i) => {
      if (!v.hide) {
        count++;
      }
    });
    return count;
  }


  render() {
    return (
      <div className="list">
        <div className="input-container">
          <input onChange={this.onInputChanged} onKeyPress={this.onInputKeyPress} />
        </div>
        {this.createList()}
        <Footer count={this.getCount()} onFiltAll={this.filterAll} onFiltActive={this.filterActive} onFiltComp={this.filterComp} />
      </div>
    );
  }
}

export default CheckList;
