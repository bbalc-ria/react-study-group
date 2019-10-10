import React, { useState } from "react";
import "../css/ToDoList.css";
import Filter from "./Filter";
import List from "./List";
import Checkbox from "./Checkbox";
import Button from "./Button";

function ToDoList() {
  const [items, setItems] = useState(() => []);
  const [filtered, setFiltered] = useState(() => []);
  const [filterFunc = (v) => v !== undefined, setFilterFunc] = useState();
  const [activeFilter = 0, setActiveFilter] = useState(0);
  const [checkall = false, setCheckall] = useState(false);

  return (
    <div className="checklist-container">
      <div className="input-container">
        <Checkbox
          visible={items.length > 0}
          checked={checkall}
          onCheck={() => {
            items.forEach(v => {
              v.checked = !checkall;
            });
            console.log("Check all", items);
            setFiltered(items.filter(filterFunc));
            setCheckall(!checkall);
          }}
        />
        <input
          className="checklist-input"
          onKeyPress={e => {
            if (e.key === "Enter") {
              var newItems = addNewItem(items, e.target.value);
              setItems(newItems);
              console.log("Enter all", newItems);
              setFiltered(newItems.filter(filterFunc));
              e.target.value = "";
            }
          }}
          placeholder="What needs to be done?"
        />
      </div>
      <div className="list-container">
        <List
          items={filtered}
          onCheck={i => {
            console.log("CheckItem index", i, "Filter", filterFunc);
            items[i].checked = !items[i].checked;
            setFiltered(items.filter(filterFunc));
            setCheckall(items.length > 0 && items.every(v => v.checked));
          }}
          onDelete={i => {
            var newItems = filterItems(items, v => v.index !== i);
            setCheckall(newItems.length > 0 && newItems.every(v => v.checked));
            setItems(newItems);
            setFiltered(newItems.filter(filterFunc));
          }}
        />
      </div>
      <div className="footer-container">
        <label className="list-count-input">
          Items: {count(items, v => !v.checked)}
        </label>
        <Filter
          activeFilter={activeFilter}
          setFilter={(filterFunc, a) => {
            console.log("Active", a, "Filter", filterFunc, "Items", items);
            setActiveFilter(a);
            setFiltered(items.filter(filterFunc));
            setFilterFunc(filterFunc);
          }}
        />
        <Button
          className="clear-completed-comp"
          visible={items.some(v => v.checked)}
          onClick={() => {
            var newItems = filterItems(items, v => !v.checked);
            setCheckall(false);
            setItems(newItems);
            setFiltered(newItems.filter(filterFunc));
          }}
          text="Clear Completed"
        />
      </div>
    </div>
  );
}

function addNewItem(values, newValue) {
  if (!isNullOrWhiteSpace(newValue)) {
    values.push({ index: 0, text: newValue, checked: false });
    values.forEach((v, i) => {
      v.index = i;
    });
  }

  return values;
}

function filterItems(values, predicate) {
  let newValues = values.filter(predicate);
  newValues.forEach((v, i) => {
    v.index = i;
  });
  return newValues;
}

function count(items, predicate) {
  let count = 0;
  items.forEach(element => {
    if (predicate(element)) count++;
  });
  return count;
}

function isNullOrWhiteSpace(value) {
  if (value !== undefined && value !== null) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== "") return false;
    }
  }
  return true;
}

export default ToDoList;

// class CheckList extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     checkAllItems: false,
//   };
// }

//  const [checkAllItems, setCheckAllItems] = useState(false);

// setCheckAllItems(!checkAllItems);
//   deleteListItem = key => {
//     let newItems = [...this.state.items];
//     newItems.splice(key, 1);
//     newItems = this.redoItemKeys(newItems);

//     this.refreshState({ newItems: newItems });
//   };

//   checkListItem = key => {
//     let items = [...this.state.items];
//     let item = items[key];
//     item.checked = !item.checked;

//     this.refreshState({ newItems: items });
//   };

//   redoItemKeys = items => {
//     return items.map((v, i) => {
//       v.index = i;
//       return v;
//     });
//   };

//   addListItem = value => {
//     var newItems = [...this.state.items];
//     newItems.push({ index: newItems.length, text: value, checked: false });
//     newItems = this.redoItemKeys(newItems);

//     this.refreshState({ newItems: newItems });
//   };

//   onInputKeyPress = event => {
//     if (event.key === "Enter" && !this.isNullOrWhiteSpace(event.target.value)) {
//       let value = event.target.value;
//       event.target.value = "";
//       this.addListItem(value);
//     }
//   };

//   isNullOrWhiteSpace = value => {
//     if (value !== undefined && value !== null) {
//       for (let i = 0; i < value.length; i++) {
//         if (value[i] !== "") return false;
//       }
//     }

//     return true;
//   };

//   setFilter = (filter, name) => {
//     this.refreshState({ filter: filter, activeFilter: name });
//   };

//   checkAll = () => {
//     var check = !this.state.checkAllItems;
//     var newItems = this.state.items.map(v => {
//       v.checked = check;
//       return v;
//     });

//     this.refreshState({ newItems: newItems });
//   };

//   refreshState = ({
//     newItems = this.state.items,
//     filter = this.state.filter,
//     activeFilter = this.state.activeFilter
//   }) => {
//     var filtered = newItems.filter(filter);
//     let checkAll = newItems.length > 0 && newItems.every(v => v.checked);

//     this.setState({
//       items: newItems,
//       filteredItems: filtered,
//       filter: filter,
//       checkAllItems: checkAll,
//       activeFilter: activeFilter
//     });
//   };

//   onDeleteCompleted = () => {
//     let newItems = this.state.items.filter(v => !v.checked);
//     this.refreshState({ newItems: newItems });
//   };

//   render() {
//     return (
//       <div className="checklist-container">
//         <div className="input-container">
//           <Checkbox
//             visible={this.state.items.length > 0}
//             checked={this.state.checkAllItems}
//             onCheck={this.checkAll}
//           />
//           <input
//             className="checklist-input"
//             onKeyPress={this.onInputKeyPress}
//             placeholder="What needs to be done?"
//           />
//         </div>
//         <div className="list-container">
//           <List
//             items={this.state.filteredItems}
//             onCheck={this.checkListItem}
//             onDelete={this.deleteListItem}
//           />
//         </div>
//         <div className="footer-container">
//           <label className="list-count-input">
//             Items: {count(this.state.items, v => !v.checked)}
//           </label>
//           <Filter
//             activeFilter={this.state.activeFilter}
//             setFilter={this.setFilter}
//           />
//           <Button
//             className="clear-completed-comp"
//             visible={this.state.items.some(v => v.checked)}
//             onClick={this.onDeleteCompleted}
//             text="Clear Completed"
//           />
//         </div>
//       </div>
//     );
//   }
// }
