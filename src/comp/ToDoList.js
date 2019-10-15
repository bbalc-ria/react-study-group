import React, { useState } from "react";
import "../css/ToDoList.css";
import Filter from "./Filter";
import List from "./List";
import Checkbox from "./Checkbox";
import Button from "./Button";

function ToDoList() {
  const [state, setState] = useState({
    items: [],
    filteredItems: [],
    filterFunction: v => v,
    filterActive: 0,
    checkAll: false
  });

  const refreshState = ({
    newItems = state.items,
    newFilterFunction = state.filterFunction,
    newFilterActive = state.filterActive,
    newCheckAll = state.checkAll
  }) => {
    if (newCheckAll !== state.checkAll)
      newItems.forEach(element => (element.checked = newCheckAll));

    let filtered = newItems.filter(newFilterFunction);
    let haveToCheckAll =
      newItems.length > 0 && !newItems.some(element => !element.checked);

    setState({
      items: newItems,
      filteredItems: filtered,
      filterFunction: newFilterFunction,
      filterActive: newFilterActive,
      checkAll: haveToCheckAll
    });
  };

  const checkItem = index => {
    let itemsCopy = [...state.items];
    itemsCopy[index].checked = !itemsCopy[index].checked;
    refreshState({ newItems: itemsCopy });
  };

  const invokeFunctionOnItems = func => {
    let itemsCopy = [...state.items];
    itemsCopy = func(itemsCopy);
    itemsCopy.forEach((element, i) => (element.index = i));
    refreshState({ newItems: itemsCopy });
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

  console.log("Rendering.");
  console.log("Items", state.items);
  console.log("Filter", state.filterFunction);
  console.log("Filtered", state.filteredItems);
  console.log("CheckAll", state.checkAll);

  return (
    <div className="checklist-container">
      <div className="input-container">
        <Checkbox
          visible={state.items.length > 0}
          checked={state.checkAll}
          onCheck={() => refreshState({ newCheckAll: !state.checkAll })}
        />
        <input
          className="checklist-input"
          onKeyPress={e => addItem(e)}
          placeholder="What needs to be done?"
        />
      </div>
      <div className="list-container">
        <List
          items={state.filteredItems}
          onCheck={i => checkItem(i)}
          onDelete={i => deleteItem(i)}
        />
      </div>
      <div className="footer-container">
        <label className="list-count-input">
          Items Left: {count(state.items, v => !v.checked)}
        </label>
        <Filter
          activeFilter={state.filterActive}
          setFilter={(filterFunc, filterActive) => {
            console.log("Setting new filter function", filterFunc);
            refreshState({
              newFilterFunction: filterFunc,
              newFilterActive: filterActive
            });
          }}
        />
        <Button
          className="clear-completed-comp"
          visible={state.items.some(v => v.checked)}
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
