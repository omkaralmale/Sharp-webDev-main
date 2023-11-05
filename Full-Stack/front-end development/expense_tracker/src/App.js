import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem.js";
import ExpenseForm from "./components/ExpenseForm.js";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Groceries",
      amount: 50.0,
      date: new Date(2021, 7, 14),
    },
  ]);

  const onAddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <h1>Hello, I'm React</h1>
      <ExpenseForm onAddExpense={onAddExpense} />
      <div className="outer">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </>
  );
};

export default App;
