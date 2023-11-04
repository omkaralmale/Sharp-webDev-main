import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitle = (e) => {
    setEnteredTitle(e.target.title.value);
  };

  const handleAmount = (e) => {
    setEnteredAmount(e.target.amount.value);
  };

  const handleDate = (e) => {
    setEnteredDate(e.target.date.value);
  };
  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleTitle}
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          onChange={handleAmount}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          onChange={handleDate}
        />
        <button type="submit">Add to Expense</button>
      </form>
    </>
  );
};

export default ExpenseForm;
