import React, { useState } from "react";
import Filter from "./Filter";
import List from "./List";
import Checkbox from "./Checkbox";
import Button from "./Button";
import * as S from "./Styles";

function ToDoList() {
  const [items, setItems] = useState([
    { index: 0, text: "Test 0", checked: false, editable: false },
    { index: 1, text: "Test 1", checked: true, editable: false },
    { index: 2, text: "Test 2", checked: false, editable: false }
  ]);
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
      items.push({ index: 0, text: text, checked: false, editable: false });
      return items;
    });
  };

  const checkAll = checkAll => {
    invokeFunctionOnItems(items => {
      items.forEach(item => (item.checked = checkAll));
      return items;
    });
  };

  const onItemDoubleClick = index => {
    invokeFunctionOnItems(items => {
      items[index].editable = true;
      return items;
    });
  };

  const onItemSaveClick = (index, newValue) => {
    invokeFunctionOnItems(items => {
      let item = items[index];
      item.text = newValue;
      item.editable = false;
      return items;
    });
  };

  console.log("Rendering.");
  console.log("Items", items);
  console.log("Filter", filter.filterFunction);

  return (
    <div>
      <S.Header>
        <S.Wrapper>
          <S.Title>ToDo(s)!</S.Title>
        </S.Wrapper>

        <S.InputContainer>
          <Checkbox
            visible={items.length > 0}
            checked={
              items.length > 0 && !items.some(element => !element.checked)
            }
            onCheck={(index, checked) => checkAll(checked)}
          />
          <S.Input
            className="checklist-input"
            onKeyPress={e => addItem(e)}
            placeholder="What needs to be done?"
          />
        </S.InputContainer>
      </S.Header>

      <S.ListContainer className="list-container">
        <List
          items={items.filter(filter.filterFunction)}
          onCheck={i => checkItem(i)}
          onDelete={i => deleteItem(i)}
          onSave={(i, v) => onItemSaveClick(i, v)}
          onDoubleClick={i => onItemDoubleClick(i)}
        />
      </S.ListContainer>
      <S.Footer>
        <S.ItemsLeftLabel>
          Items Left: {count(items, v => !v.checked)}
        </S.ItemsLeftLabel>
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
        <S.ClearCompletedContainer>
          <Button
            visible={items.some(v => v.checked)}
            onClick={() => deleteCheckedItems()}
            text="Clear Completed"
          />
        </S.ClearCompletedContainer>
      </S.Footer>
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
