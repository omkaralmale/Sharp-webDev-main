import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import cartContext from "../../../store/cartContext";

const MealItem = (props) => {
  const cartCtx = useContext(cartContext);
  const onCartHandel = (amount) => {
    cartCtx.addItems({
      id: props.id,
      amount: +amount,
      price: props.price,
    });
  };
  return (
    <li key={props.id} className={classes.meal}>
      <div className="list-container">
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.rating}>⭐ {props.rating}/5</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onSubmit={onCartHandel} />
      </div>
    </li>
  );
};

export default MealItem;
