import { useRef, useState } from "react";
import Button from "../../../UI/Button/Button";
import classes from "./Timer.module.css";


function Timer({ title, targetTime, style }) {
    const timer = useRef();
    const[timeStarted, setTimeStarted] = useState(false);
    const[timeExpired, setTimeExpired] = useState(false);
    var timeStatus;

    function handleStart(){
        console.log("Time Started");    
        timer.current = setTimeout(() => {
            setTimeExpired(true);
            console.log("Time Expired");
        }, targetTime*1000);
        setTimeStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
    }

    if(!timeStarted && !timeExpired){
        timeStatus = 'Timer Inactive';
    } else if(timeStarted && !timeExpired) {
        timeStatus = 'Timer Running';
    } else if (timeStarted && timeExpired) {
        timeStatus = 'Time Expired';
    }

  return (
    <>
      <div className={classes.card}>
        <div className={classes.card__content}>
          <div className={classes.card__content__values}>
            <h1 style={style}>{title}</h1>
            <h2>{`${targetTime} seconds`}</h2>
            <Button onClick={timeStarted?{handleStart}:{handleStop}}>{timeStarted?'Start Timer':'Stop Timer'}</Button>
            {timeStatus}
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
