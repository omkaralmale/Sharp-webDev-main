import "./ExpenseItem.css";
import React from "react";

function ExpenseItem(props) {
  const date = new Date(props.date);
  const months = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const year = date.getFullYear();

  return (
    <div className="box">
      <div className="date">
        <div>{months}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="content">
        <h2>{props.name}</h2>
        <h2>Rs {props.amount}</h2>
        <p>{props.location}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
