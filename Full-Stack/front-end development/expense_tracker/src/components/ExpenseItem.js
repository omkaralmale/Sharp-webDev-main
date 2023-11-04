import "./ExpenseItem..css";
import ExpenseDate from "./ExpeneseDate.js";
const ExpenseItem = (props) => {
  const clickEdit = () => {
    console.log("Edit");
  };
  const clickDelete = () => {
    console.log("Delete");
  };
  return (
    <div class="container">
      <div class="item">
        <ExpenseDate date={props.date} />
        <h2 class="title-ex">{props.title}</h2>
        <div class="expense">${props.amount}</div>
        <button onClick={clickEdit}>Edit</button>
        <button onClick={clickDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
