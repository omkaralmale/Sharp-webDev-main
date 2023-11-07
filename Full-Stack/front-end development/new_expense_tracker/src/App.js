import "./App.css";
import React, { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems.js";
import NewExpense from "./components/Expenses/NewExpense.js";
import ExpeneseFilter from "./components/Expenses/ExpneseFilter.js";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterYear, setFilterYear] = useState("");

  const saveData = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  const handdleFilter = (year) => {
    setFilterYear(year);
    console.log(year);
  };

  return (
    <>
      <h2>Add Your Expenses </h2>
      <ExpeneseFilter
        selected={filterYear}
        onChangeFilter={handdleFilter}></ExpeneseFilter>
      <NewExpense onDone={saveData}></NewExpense>
      <div id="card">
        {expenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            Title={expense.title}
            Date={expense.date}
            Amount={expense.amount}
          />
        ))}
      </div>
    </>
  );
};

export default App;
