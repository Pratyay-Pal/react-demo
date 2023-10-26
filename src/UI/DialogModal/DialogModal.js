import classes from "./DialogModal.module.css";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function DialogModal({ targetTime, timeRemaining , resetTime}, ref) {

    const dialog = useRef();
    const success = timeRemaining > 0;
    const formattedTimeRemaining = (timeRemaining/1000).toFixed(2);

    useImperativeHandle(ref, ()=>{
        return{
            show(){
                dialog.current.showModal();
            }
        }
    });

  return createPortal(
    <>      
      <dialog ref={dialog} className={classes.modalcontent} onClose={resetTime}>
        {success? <h2>You Won</h2> : <h2>You Lost</h2>}
        <p className={classes.modalcontent.p}>Stop timer within {targetTime} second(s)</p>
        <p>You stopped with {formattedTimeRemaining} seconds left</p>
        <form method="dialog" onSubmit={resetTime}>
          <button>Close</button>
        </form>
      </dialog>
    </>, document.getElementById("modal")
  );
})

export default ResultModal;
