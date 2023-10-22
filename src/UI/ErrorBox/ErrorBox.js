import classes from "./ErrorBox.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

function ErrorBox(props) {
  return (
    <>
    <div className={classes.backdrop} onClick={props.onClearError}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.exception}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClearError}>OK</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorBox;
