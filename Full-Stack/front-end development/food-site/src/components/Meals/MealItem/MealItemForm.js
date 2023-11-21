import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [formValid, setrValid] = useState(true);
  const inputQty = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputQty.current.value;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setrValid(false);
      return;
    }
    props.onSubmit(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputQty}
        label="Qty:"
        input={{
          id: "amount",
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add Dish</button>
      {formValid && <p>Enter valid Qty</p>}
    </form>
  );
};

export default MealItemForm;
