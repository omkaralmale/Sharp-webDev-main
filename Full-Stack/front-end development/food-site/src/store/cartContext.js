import React from "react";

const cartContext = React.createContext({
  item: [],
  amount: 0,
  addItems: (item) => {},
  removeItems: (id) => {},
});

export default cartContext;
