import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li key={props.key} className={classes.meal}>
      <div className="list-container">
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.rating}>⭐ {props.rating}/5</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
