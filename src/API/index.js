export const getOrders = () => {
    return fetch('https://dummyjson.com/carts/1').then((res)=>res.json());
};

export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};

export const getEvents = () => {
    return fetch("https://collecture.org/api/puzzles?format=json").then((res) => res.json());
  };