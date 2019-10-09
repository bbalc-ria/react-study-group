import React from 'react';
import '../css/CheckList.css';
import Filter from './Filter'
import List from './List'
import Checkbox from './Checkbox';
import Button from './Button';

class CheckList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkAllItems: false,
      items: [],
      filter: (v) => v,
      filteredItems: [],
      activeFilter: 0
    };
  }

  deleteListItem = (key) => {
    let newItems = [...this.state.items];
    newItems.splice(key, 1);
    newItems = this.redoItemKeys(newItems);

    this.refreshState({ newItems: newItems });
  }

  checkListItem = (key) => {
    let items = [...this.state.items];
    let item = items[key];
    item.checked = !item.checked;

    this.refreshState({ newItems: items });
  }

  redoItemKeys = (items) => {
    return items.map((v, i) => {
      v.index = i;
      return v;
    });
  }

  addListItem = (value) => {
    var newItems = [...this.state.items];
    newItems.push({ index: newItems.length, text: value, checked: false });
    newItems = this.redoItemKeys(newItems);

    this.refreshState({ newItems: newItems });
  }

  onInputKeyPress = (event) => {
    if (event.key === 'Enter' && !this.isNullOrWhiteSpace(event.target.value)) {
      let value = event.target.value;
      event.target.value = '';
      this.addListItem(value);
    }
  }

  isNullOrWhiteSpace = (value) => {
    if (value !== undefined && value !== null) {
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== '')
          return false;
      }
    }

    return true;
  }

  setFilter = (filter, name) => {
    this.refreshState({ filter: filter, activeFilter: name });
  }

  checkAll = () => {
    var check = !this.state.checkAllItems;
    var newItems = this.state.items.map(v => {
      v.checked = check;
      return v;
    });

    this.refreshState({ newItems: newItems });
  }

  refreshState = ({ newItems = this.state.items, filter = this.state.filter, activeFilter = this.state.activeFilter }) => {
    var filtered = filter(newItems);
    console.log("Refresh", newItems, "Filtered:", filtered, "Filter:", filter);
    let checkAll = newItems.length > 0 && newItems.every(v => v.checked);
    this.setState({ items: newItems, filteredItems: filtered, filter: filter, checkAllItems: checkAll, activeFilter: activeFilter });
  }

  onDeleteCompleted = () => {
    console.log("Deleted Completed")
    let newItems = this.state.items.filter(v => !v.checked);
    this.refreshState({ newItems: newItems });
  }

  render() {
    return (
      <div className="checklist-container">
        <div className="input-container">
          <Checkbox visible={this.state.items.length > 0} checked={this.state.checkAllItems} onCheck={this.checkAll} index={0} />
          <input className="checklist-input" onKeyPress={this.onInputKeyPress} placeholder="What needs to be done?" />
        </div>
        <div className="list-container">
          <List items={this.state.filteredItems} onCheck={this.checkListItem} onDelete={this.deleteListItem} />
        </div>
        <div className="footer-container">
          <label className="list-count-input">Items: {this.state.items.length}</label>
          <Filter getActiveFilter={() => this.state.activeFilter} setFilter={this.setFilter} />
          {this.state.items.some(v => v.checked)
            ? <Button className="clear-completed-comp" onClick={this.onDeleteCompleted} text="Clear Completed" />
            : <Button className="invisible" onClick={this.onDeleteCompleted} text="Clear Completed" />
          }
        </div>
      </div>
    );
  }
}

export default CheckList;
