import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import cartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);

  const CountItems = cartCtx.item.reduce((acco, dish) => {
    return acco + dish.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClickCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{CountItems}</span>
    </button>
  );
};

export default HeaderCartButton;
