import ExpenseDate from "./ExpeneseDate";
import "./ExpenseItem.css";

const ExpenseItems = (props) => {
  return (
    <div className="outContainer">
      <div className="exContainer">
        <div className="firstGrid">
          <ExpenseDate date={props.Date} /> <div>{props.Title}</div>
        </div>
        <div id="cost">$ {props.Amount}</div>
      </div>
      <button>Change</button>
    </div>
  );
};
export default ExpenseItems;
