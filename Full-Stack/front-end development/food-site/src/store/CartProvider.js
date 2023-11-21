/* eslint-disable no-unused-vars */
import React, { useContext, useReducer, useState } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  item: [],
  amount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "add") {
    const updatedItems = state.item.concat(action.item);
    const updatedAmount =
      parseFloat(state.amount) +
      parseFloat(action.item.qty) * parseFloat(action.item.amount);

    return {
      item: updatedItems,
      amount: updatedAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchState] = useReducer(CartReducer, defaultCartState);

  const addItemsHandler = (item) => {
    dispatchState({ type: "add", item: item });
  };
  const removeItemsHandler = (id) => {
    dispatchState({ type: "add", id: id });
  };
  const cartContext = {
    item: cartState.item,
    amount: cartState.amount,
    removeItems: removeItemsHandler,
    addItems: addItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
