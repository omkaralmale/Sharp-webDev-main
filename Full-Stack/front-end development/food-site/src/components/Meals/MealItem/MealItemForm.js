import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Qty:"
        input={{
          id: "amount",
          type: "number",
          min: 0,
          max: 10,
          step: 1,
          defaultValue: 0,
        }}
      />
      <button>+ Add Dish</button>
    </form>
  );
};

export default MealItemForm;
