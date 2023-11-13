import classes from './GameOver.module.css'
import { createPortal } from 'react-dom';
import { useRef, useImperativeHandle, forwardRef } from 'react';

const ResultModal = forwardRef(function GameOver({resetBoard, winner}, ref){

    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return{
            show(){
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <>      
          <dialog ref={dialog} className={classes.modalcontent} onClose={resetBoard}>            
            <p className={classes.modalcontent.p}>{winner?winner+" WON!":"MATCH DRAW"}</p>
            <form onSubmit={resetBoard}>
              <button>REMATCH</button>
            </form>
          </dialog>
        </>, document.getElementById("modal")
      );
})

export default ResultModal