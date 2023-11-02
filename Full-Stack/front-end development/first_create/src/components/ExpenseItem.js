import "./ExpenseItem.css";
import React from "react";

function ExpenseItem(props) {
  return (
    <div className="box">
      <div className="date">{props.date}</div>
      <div className="content">
        <h2>{props.name}</h2>
        <h2>Rs {props.amount}</h2>
        <p>{props.location}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
