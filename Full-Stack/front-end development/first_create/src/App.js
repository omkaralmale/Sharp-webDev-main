import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: "2023-11-02",
      name: "Food",
      amount: 10,
      location: "Restaurant",
    },
    {
      date: "2023-11-03",
      name: "Petrol",
      amount: 100,
      location: "Gas Station",
    },
    {
      date: "2023-11-04",
      name: "Movies",
      amount: 200,
      location: "Cinema",
    },
  ];

  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          name={expense.name}
          amount={expense.amount}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
