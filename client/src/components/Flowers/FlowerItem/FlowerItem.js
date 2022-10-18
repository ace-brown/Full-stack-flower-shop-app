import React, { Fragment } from "react";

import classes from "./FlowerItem.module.css";
const FlowerItem = (props) => {
  return (
    <Fragment className={classes.flower}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>
      <form>
        <label>Amount</label>
        <button>Add</button>
      </form>
    </Fragment>
  );
};

export default FlowerItem;
