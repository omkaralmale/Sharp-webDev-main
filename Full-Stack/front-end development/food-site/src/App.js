import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartVisible, setVisibility] = useState();

  const showCartHandler = () => {
    setVisibility(true);
  };

  const hideCartHandler = () => {
    setVisibility(false);
  };

  return (
    <Fragment>
      {cartVisible && <Cart onClose={hideCartHandler} />}
      <Header onClickBadge={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
