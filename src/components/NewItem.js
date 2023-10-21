import "./NewItem.css";
import { useState } from "react";

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
    setEnteredText("");
    setIsValid(false);
  };

  return (
    <div className="itemsform">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Minimum 5 characters"
          className={`inputtext ${isValid ? "valid" : "invalid"}`}
          value={enteredText}
          onChange={formTextChangeHandler}
        />
        <button
          type="submit"
          className={`submitButton ${isValid ? "" : "disabled"}`}
          onClick={formSubmitHandler}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default NewItem;
