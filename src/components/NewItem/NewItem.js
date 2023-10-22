import "./NewItem.css";
import { useState } from "react";
import Button from '../../UI/Button/Button.js'
import Card from '../../UI/Card/Card.js'

function NewItem(props) {
  const [enteredText, setEnteredText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const formTextChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredText(event.target.value);
    if (event.target.value.length >= 5) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    isValid && props.addItem(enteredText);
    isValid && setEnteredText("");
    setIsValid(false);
  };

  return (
    <Card className="itemsform">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Minimum 5 characters"
          className={`inputtext ${isValid ? "valid" : "invalid"}`}
          value={enteredText}
          onChange={formTextChangeHandler}
        />
        <Button
          type="submit"
          className={`${isValid ? "" : "disabled"}`}
          onClick={formSubmitHandler}
        >
          SUBMIT
        </Button>
      </form>
    </Card>
  );
}

export default NewItem;
