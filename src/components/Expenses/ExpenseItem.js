import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// components in react are just Js functions

const ExpenseItem = (props) => {
  // useState always returns an array of two values.  The value and a function
  // for updating the value in 0.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* event listener */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
