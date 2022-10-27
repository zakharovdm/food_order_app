import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import imageMeals from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food order</h1> 
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={imageMeals}
          alt="Table with food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
