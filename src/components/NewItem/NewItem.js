import "./NewItem.css";
import { useRef, useState } from "react";
import Button from '../../UI/Button/Button.js'
import Card from '../../UI/Card/Card.js'
import ErrorBox from "../../UI/ErrorBox/ErrorBox";

function NewItem(props) {
  const [enteredText, setEnteredText] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState();

  const anotherText = useRef();

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
    !isValid && setError({
      title:"ERROR",
      exception:"Enter Value more than 5 characters"
    })
    isValid && props.addItem(enteredText+' | '+anotherText.current.value);
    isValid && setEnteredText("");
    anotherText.current.value = '';
    setIsValid(false);
  };

  const clearError = () => {
    setError(null);
  }

  return (
    <>
    {error && <ErrorBox title={error.title} exception={error.exception} onClearError={clearError}/>}
    <Card className="itemsform">
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Minimum 5 characters"
          className={`inputtext ${isValid ? "valid" : "invalid"}`}
          value={enteredText}
          onChange={formTextChangeHandler}
        />
        <input
          type="text"
          placeholder="Enter Anything"
          className={`inputtext`}
          ref={anotherText}
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
    </>
  );
}

export default NewItem;
