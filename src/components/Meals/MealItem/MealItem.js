import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <label id="amount">Amount</label>
        <input name="amount" type="number" value="1"/>
        <button type="button">+ Add</button>
      </div>
  </li>
};

export default MealItem;