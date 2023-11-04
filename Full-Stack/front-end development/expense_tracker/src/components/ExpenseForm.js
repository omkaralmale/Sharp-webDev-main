const ExpenseForm = () => {
  //create eventlistener to print value of title amount and date
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.amount.value);
    console.log(e.target.date.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="amount" placeholder="Amount" />
        <input type="date" name="date" placeholder="Date" />
        <button type="submit">Add to Expense</button>
      </form>
    </>
  );
};

export default ExpenseForm;
