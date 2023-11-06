const ExpenseDate = (props) => {
  console.log(props.date);
  return (
    <>
      <div id="date">
        {props.date.getDate()}/{props.date.getMonth()}/
        {props.date.getFullYear()}
      </div>
    </>
  );
};

export default ExpenseDate;
