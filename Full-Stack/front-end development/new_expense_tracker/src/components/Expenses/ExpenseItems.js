import ExpenseDate from "./ExpeneseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";

const ExpenseItems = (props) => {
  return (
    <div className="outContainer">
      <div className="exContainer">
        <ExpenseDate date={props.Date} /> <div>{props.Title}</div>
        <div id="cost">$ {props.Amount}</div>
      </div>
      <button>Change</button>
    </div>
  );
};
export default ExpenseItems;
