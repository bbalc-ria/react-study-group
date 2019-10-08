import React from 'react';
import '../css/CheckList.css';
import Footer from './Footer'
import List from './List'
import Checkbox from './Checkbox';
import VisibleButton from './VisibleButton';

class CheckList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      checkAllItems: false,
      items: [],
      filter: (v) => v,
      filteredItems: [],
      length: 0,
      activeFilter: 0
    };
  }

  deleteListItem = (key) => {
    console.log("Delete list item ", key);
    let newItems = [...this.state.items];
    newItems.splice(key, 1);

    this.redoItemKeys(newItems);
    this.refreshState({ newItems: newItems });
  }

  checkListItem = (key) => {
    console.log("Check list item ", key);
    let items = [...this.state.items];
    let item = items[key];
    item.checked = !item.checked;
    this.refreshState({ newItems: items });
  }

  redoItemKeys = (items) => {
    for (let i = 0; i < items.length; i++) {
      items[i].index = i;
    }
  }

  addListItem = () => {
    console.log("Add list item ", this.state.text);
    var newItems = [...this.state.items];
    newItems.push({ index: newItems.length, text: this.state.text, checked: false });

    this.redoItemKeys(newItems);
    this.refreshState({ newItems: newItems });
  }

  onInputChanged = (event) => {
    console.log("Input changed " + event.target.value);
    this.setState({ text: event.target.value });
  }

  onInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.addListItem();
    }
  }

  showAll = () => {
    this.setFilter((items) => { return items.filter(v => v) }, 0);
  }

  showActive = () => {
    this.setFilter((items) => { return items.filter(v => !v.checked) }, 1);
  }

  showCompleted = () => {
    this.setFilter((items) => { return items.filter(v => v.checked) }, 2);
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
    if (filtered === undefined)
      filtered = [];

    console.log("Refresh", newItems, "Filtered:", filtered, "Filter:", filter);

    let checkAll = newItems.length > 0 && newItems.every(v => v.checked);

    this.setState({ items: newItems, filteredItems: filtered, filter: filter, length: filtered.length, checkAllItems: checkAll, activeFilter: activeFilter });
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
          <input className="checklist-input" onChange={this.onInputChanged} onKeyPress={this.onInputKeyPress} />
        </div>
        <div className="list-container">
          <List items={this.state.filteredItems} onCheck={this.checkListItem} onDelete={this.deleteListItem} />
        </div>
        <div className="footer-container">
          <Footer activeFilter={this.state.activeFilter} count={this.state.length} onFiltAll={this.showAll} onFiltActive={this.showActive} onFiltComp={this.showCompleted} />
          <VisibleButton visible={this.state.items.some(v => v.checked)} onClick={this.onDeleteCompleted} />
        </div>
      </div>
    );
  }
}

export default CheckList;
