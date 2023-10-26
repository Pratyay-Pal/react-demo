import { useRef, useState } from "react";
import Button from "../../../UI/Button/Button";
import classes from "./Timer.module.css";
import DialogModal from "../../../UI/DialogModal/DialogModal";

function Timer({ title, targetTime, style }) {
  const timer = useRef();
  // COMMENTED IS A DIFFERENT USE CASE
  // const [timeStarted, setTimeStarted] = useState(false);
  // const [timeExpired, setTimeExpired] = useState(false);
  // const [timeStatus, setTimeStatus] = useState("Timer Inactive");
  const dialog = useRef();

  // function handleStart() {
  //   console.log("Time Started");
  //   timer.current = setTimeout(() => {
  //     setTimeExpired(true);
  //     setTimeStarted(false);
  //     timeStatusText(true, true);
  //     dialog.current.show();
  //     console.log("Time Expired");
  //   }, targetTime * 1000);
  //   setTimeStarted(true);
  //   timeStatusText(true, false);
  // }

  // function handleStop() {
  //   clearTimeout(timer.current);
  //   setTimeStarted(false);
  //   setTimeExpired(false);
  //   timeStatusText(false, false);
  // }

  // function timeStatusText(timeStarted, timeExpired) {
  //   console.log("UI update");
  //   if (!timeStarted && !timeExpired) {
  //     setTimeStatus("Timer Inactive");
  //   } else if (timeStarted && !timeExpired) {
  //     setTimeStatus("Timer Running");
  //   } else if (timeStarted && timeExpired) {
  //     setTimeStatus("Time Expired");
  //   }
  // }

  const [timeRemaining, setTimeRemaning] = useState(targetTime*1000);
  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0){
    console.log("Timer Expired")
    clearInterval(timer.current);
    dialog.current.show()
  }

  const handleStart = () => {
    console.log("Timer Started")
    timer.current = setInterval(() => {
      setTimeRemaning(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

  const handleStop = () => {
    console.log("Timer Stopped")
    clearInterval(timer.current);
    dialog.current.show()
  }

  const resetTime = () => {
    setTimeRemaning(targetTime * 1000);
  }

  return (
    <>
    <DialogModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} resetTime={resetTime}/>
      <div className={classes.card}>
        <div className={classes.card__content}>
          <div className={classes.card__content__values}>
            <h1 style={style}>{title}</h1>
            <h2>{`${targetTime} seconds`}</h2>
            <Button onClick={timerActive ? handleStop : handleStart }>
              {timerActive ? "Stop Timer" : "Start Timer"}
            </Button>
            <p>{timerActive?  "Timer Running" : "Timer Stopped" }</p>
          </div>
        </div>
        <div className={classes.blob}></div>
        <div className={classes.blob}></div>
        <div className={classes.blob}></div>
        <div className={classes.blob}></div>
      </div>
    </>
  );
}

export default Timer;
