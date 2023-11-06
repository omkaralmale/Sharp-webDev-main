import ExpenseForm from "./ExpenseForm";
import React from "react";
const NewExpense = (props) => {
  const onSaveData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString,
    };
    props.onDone(expenseData);
  };
  return <ExpenseForm onSaveD={onSaveData} />;
};

export default NewExpense;
