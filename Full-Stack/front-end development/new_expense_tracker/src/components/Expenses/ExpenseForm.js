import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [oldTitle, setNewTitle] = useState("");
  const [oldDate, setNewDate] = useState("");
  const [oldAmount, setNewAmount] = useState("");

  const changeTitle = (e) => {
    setNewTitle(e.target.value);
  };
  const changeDate = (e) => {
    setNewDate(e.target.value);
  };
  const changeAmount = (e) => {
    setNewAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: oldTitle,
      date: new Date(oldDate),
      amount: +oldAmount,
    };
    props.onSaveD(expenseData);
    setNewAmount("");
    setNewDate("");
    setNewTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="DATE"
        onChange={changeDate}
        value={oldDate}></input>
      <input
        type="text"
        placeholder="TITLE"
        onChange={changeTitle}
        value={oldTitle}></input>
      <input
        type="number"
        placeholder="AMOUNT"
        onChange={changeAmount}
        value={oldAmount}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
