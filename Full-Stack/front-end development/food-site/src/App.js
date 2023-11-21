import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible, setVisibility] = useState();

  const showCartHandler = () => {
    setVisibility(true);
  };

  const hideCartHandler = () => {
    setVisibility(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onClose={hideCartHandler} />}
      <Header onClickBadge={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
