import React from "react";
import classes from "./MealItem.module.css";
const MealItem = (props) => {
  return (
    <li key={props.key} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.rating}>{props.rating}</div>
      <div className={classes.price}>$ {props.price.toFixed(2)}</div>
    </li>
  );
};

export default MealItem;
