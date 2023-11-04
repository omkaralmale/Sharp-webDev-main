import "./ExpenseItem..css";
import React, { useState } from "react";
import ExpenseDate from "./ExpeneseDate.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickEdit = () => {
    setTitle("Updated");
    setAmount("100");
  };

  const clickDelete = () => {
    console.log("Delete");
  };

  return (
    <div className="container">
      {" "}
      <div className="item">
        <ExpenseDate date={props.date} />
        <h2 className="title-ex">{title}</h2>
        <div className="expense">${amount}</div>
        <button onClick={clickEdit}>Edit</button>
        <button onClick={clickDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
