export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => {
  let stringValue = localStorage.getItem(key);
  try {
    return JSON.parse(stringValue);
  } catch (error) {
    console.log(error);
    return null;
  }
};
