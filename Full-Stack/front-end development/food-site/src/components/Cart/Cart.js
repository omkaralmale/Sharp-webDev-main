/* eslint-disable no-unused-vars */
import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal.js";

export default function Cart(props) {
  const cartItems = [
    { id: "c1", name: "paneer", Qty: 2, price: 12.97 },
    { id: "c3", name: "paneer masal", Qty: 3, price: 20.97 },
  ].map((item) => {
    return <li key={item.id}> {item.name}</li>;
  });

  return (
    <Modal onCloseCart={props.onClose}>
      <ol> {cartItems}</ol>
      <div className={classes.total}>
        <span>Amount: </span>
        <span>₹ 230 </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>ORDER</button>
      </div>
    </Modal>
  );
}
