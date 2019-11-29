export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key =>{
    let stringValue = localStorage.getItem(key);
    return JSON.parse(stringValue);
}