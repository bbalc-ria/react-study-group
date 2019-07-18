const getListFromLocalStorage = itemKey => {
  let persistedStringList = localStorage.getItem(itemKey);

  let persistedList = persistedStringList
    ? JSON.parse(persistedStringList)
    : [];

  return persistedList;
};

const setListOnLocalStorage = (itemKey, list) => {
    localStorage.setItem(itemKey, JSON.stringify(list));
};

export { getListFromLocalStorage,  setListOnLocalStorage};
