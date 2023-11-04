import "./App.css";
import ExpenseItem from "./components/ExpenseItem.js";

const App = () => {
  const expense = [
    {
      title: "Groceries",
      amount: 50.0,
      date_of_expenses: new Date(),
    },
    {
      title: "Gasoline",
      amount: 30.25,
      date_of_expenses: new Date(),
    },
    {
      title: "Dinner with Friends",
      amount: 75.5,
      date_of_expenses: new Date(),
    },
    {
      title: "Movie Tickets",
      amount: 20.0,
      date_of_expenses: new Date(),
    },
    {
      title: "Utilities",
      amount: 100.0,
      date_of_expenses: new Date(),
    },
    {
      title: "Clothing",
      amount: 60.75,
      date_of_expenses: new Date(),
    },
    {
      title: "Restaurant Lunch",
      amount: 35.6,
      date_of_expenses: new Date(),
    },
    {
      title: "Medical Expenses",
      amount: 120.0,
      date_of_expenses: new Date(),
    },
    {
      title: "Transportation",
      amount: 45.3,
      date_of_expenses: new Date(),
    },
    {
      title: "Gift for Family",
      amount: 55.0,
      date_of_expenses: new Date(),
    },
  ];

  return (
    <>
      <h1>Hello I'm React</h1>
      <div className="outer">
        {expense.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date_of_expenses}
          />
        ))}
      </div>
    </>
  );
};

export default App;
