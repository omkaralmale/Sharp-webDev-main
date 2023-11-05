import React from "react";
import ExpenseDate from "./ExpenseDate.js";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* Edit and Delete handlers can be implemented later */}
      <button onClick={() => console.log("Edit")}>Edit</button>
      <button onClick={() => console.log("Delete")}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
