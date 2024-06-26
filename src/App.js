import React, { useState } from "react";
import classes from "./App.module.css";
import AddingListingItems from "./content/AddingListingItems/AddingListingItems";
import Button from "./UI/Button/Button";
import ExpenseTracker from "./content/Expenses/ExpenseTracker";
import TimerController from "./content/Timer/TimerController/TimerController";
import TicTacToe from "./content/TicTacToe/TicTacToe";
import Shopping from "./content/Shopping/Shopping";
import VacationFinder from "./content/VacationFinder/VacationFinder";
import UserForm from "./content/UserForms/Login/UserForm";
import SignUp from "./content/UserForms/SignUp/SignUp";

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
    else if (whichContent === "tictactoe"){
      setContent(<TicTacToe/>);
    }
    else if (whichContent === "shopping"){
      setContent(<Shopping/>);
    }
    else if (whichContent === "vacation"){
      setContent(<VacationFinder/>);
    }
    else if (whichContent === "userform"){
      setContent(<UserForm/>);
    }
    else if (whichContent === "signUp"){
      setContent(<SignUp/>);
    }
  }

  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.headercontent}>
          <Button className={classes.button} onClick={() => headerClickHandler("addlist")}>Adding and Listing Items</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("timer")}>Timer</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("expense")}>Expense Tracker(Udemy)</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("tictactoe")}>Tic Tac Toe</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("shopping")}>Shopping</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("vacation")}>Vacation Finder</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("userform")}>User Form</Button>
          <Button className={classes.button} onClick={() => headerClickHandler("signUp")}>Sign Up</Button>
        </div>
      </div>
      {content}
    </React.Fragment>
  );
}

export default App;
