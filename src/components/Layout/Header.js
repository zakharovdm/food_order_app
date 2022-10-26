import { Fragment } from "react";
import classes from "./Header.module.css";
import imageMeals from "../../assets/meals.jpeg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food order</h1>
        <button>Cart</button>
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
