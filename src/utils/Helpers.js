const getListFromLocalstorage = itemKey => {
  let persistedStringList = localStorage.getItem(itemKey);

  let persistedList = persistedStringList
    ? JSON.parse(persistedStringList)
    : [];

  return persistedList;
};

export { getListFromLocalstorage };
