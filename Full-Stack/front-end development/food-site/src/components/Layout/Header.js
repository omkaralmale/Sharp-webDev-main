import React, { Fragment } from "react";
import bg from "../../assets/tc-food.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>GreenBite</h1>
        <div className="sub-div">
          <HeaderCartButton onClickCart={props.onClickBadge} />
        </div>
      </header>
      <div className=".main-image">
        <img src={bg} alt="food on table" />
      </div>
    </Fragment>
  );
};

export default Header;
