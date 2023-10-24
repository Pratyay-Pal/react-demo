import React, { useState } from "react";
import classes from "./App.module.css";
import AddingListingItems from "./content/AddingListingItems/AddingListingItems";
import Button from "./UI/Button/Button";
import ExpenseTracker from "./content/Expenses/ExpenseTracker";
import TimerController from "./content/Timer/TimerController/TimerController";

function App() {
  const [content, setContent] = useState();

  const headerClickHandler = (whichContent) => {
    if (whichContent === "addlist"){
      setContent(<AddingListingItems/>);
    }
    else if (whichContent === "timer"){
      setContent(<TimerController/>);
    }
    else if (whichContent === "expense"){
      setContent(<ExpenseTracker/>);
    }
  }

  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.headercontent}>
          <Button className={classes.button} onClick={() => headerClickHandler("addlist")}>Adding and Listing Items</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("timer")}>Timer</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("expense")}>Expense Tracker(Udemy)</Button>
        </div>
      </div>
      {content}
    </React.Fragment>
  );
}

export default App;
