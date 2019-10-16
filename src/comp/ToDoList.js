import React, { useState } from "react";
import "../css/ToDoList.css";
import Filter from "./Filter";
import List from "./List";
import Checkbox from "./Checkbox";
import Button from "./Button";

function ToDoList() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({
    filterFunction: v => v,
    filterActive: 0
  });

  const checkItem = index => {
    let itemsCopy = [...items];
    itemsCopy[index].checked = !itemsCopy[index].checked;
    setItems(itemsCopy);
  };

  const invokeFunctionOnItems = func => {
    let itemsCopy = [...items];
    itemsCopy = func(itemsCopy);
    itemsCopy.forEach((element, i) => (element.index = i));
    setItems(itemsCopy);
  };

  const deleteFromItemsWhere = predicate => {
    invokeFunctionOnItems(items =>
      items.filter(element => predicate(element) === false)
    );
  };

  const deleteItem = index => {
    deleteFromItemsWhere(item => item.index === index);
  };

  const deleteCheckedItems = () => {
    deleteFromItemsWhere(item => item.checked);
  };

  const addItem = event => {
    if (event.key !== "Enter") return;
    if (!event.target.value.trim()) return;
    let text = event.target.value;

    event.target.value = "";
    invokeFunctionOnItems(items => {
      items.push({ index: 0, text: text, checked: false });
      return items;
    });
  };

  const checkAll = checkAll => {
    invokeFunctionOnItems(items => {
      items.forEach(item => (item.checked = checkAll));
      return items;
    });
  };

  console.log("Rendering.");
  console.log("Items", items);
  console.log("Filter", filter.filterFunction);

  return (
    <div className="checklist-container">
      <div className="input-container">
        <Checkbox
          visible={items.length > 0}
          checked={items.length > 0 && !items.some(element => !element.checked)}
          onCheck={(index, checked) => checkAll(checked)}
        />
        <input
          className="checklist-input"
          onKeyPress={e => addItem(e)}
          placeholder="What needs to be done?"
        />
      </div>
      <div className="list-container">
        <List
          items={items.filter(filter.filterFunction)}
          onCheck={i => checkItem(i)}
          onDelete={i => deleteItem(i)}
        />
      </div>
      <div className="footer-container">
        <label className="list-count-input">
          Items Left: {count(items, v => !v.checked)}
        </label>
        <Filter
          activeFilter={filter.filterActive}
          setFilter={(filterFunc, filterActive) => {
            console.log("Setting new filter function", filterFunc);
            setFilter({
              filterFunction: filterFunc,
              filterActive: filterActive
            });
          }}
        />
        <Button
          className="clear-completed-comp"
          visible={items.some(v => v.checked)}
          onClick={() => deleteCheckedItems()}
          text="Clear Completed"
        />
      </div>
    </div>
  );
}

function count(items, predicate) {
  let count = 0;
  items.forEach(element => {
    if (predicate(element)) count++;
  });
  return count;
}

export default ToDoList;
