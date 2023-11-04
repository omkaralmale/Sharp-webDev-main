import "./App.css";
import ExpenseItem from "./components/ExpenseItem.js";
import ExpenseForm from "./components/ExpenseForm.js";

const App = () => {
  const expense = [
    {
      title: "Groceries",
      amount: 50.0,
      date: new Date(),
    },
    {
      title: "Gasoline",
      amount: 30.25,
      date: new Date(),
    },
    {
      title: "Dinner with Friends",
      amount: 75.5,
      date: new Date(),
    },
    {
      title: "Movie Tickets",
      amount: 20.0,
      date: new Date(), // Corrected property name here
    },
    {
      title: "Utilities",
      amount: 100.0,
      date: new Date(),
    },
    // ... rest of the items
  ];

  return (
    <>
      <h1>Hello I'm React</h1>
      <ExpenseForm />
      <div className="outer">
        {expense.map((expense) => (
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
