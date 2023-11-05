import classes from "./Playercard.module.css";
import Button from "../../../../UI/Button/Button";
import { useRef, useState } from "react";

export default function Playercard({onChangeName, playerName, playerSymbol, activePlayer}) {
  const [isEditing, setIsEditing] = useState(false);
  const newName = useRef();

  const ediPlayerName = (EditOrSave) => {
    if (EditOrSave === "EDIT") {
      setIsEditing(true);
    } else {
        if (newName.current.value === ''){
            alert("NAME CANNOT BE EMPTY");
        }
        onChangeName(newName.current.value)
      setIsEditing(false);
    }
  };

  return (
    <li className={`${classes.playercard} ${activePlayer != null ? classes.playercardactive : null}`}>
      <span className={classes.playercardcontent}>
        <span>
          {!isEditing && <span className={classes.playername}>{playerName}</span>}
          {isEditing && <input ref={newName} type="text" />}
          <span className={classes.playersymbol}>{playerSymbol}</span>
        </span>
        <Button
          className={classes.nameeditbutton}
          onClick={() => ediPlayerName(!isEditing ? "EDIT" : "SAVE")}
        >
          {!isEditing ? "EDIT NAME" : "SAVE NAME"}
        </Button>
      </span>
    </li>
  );
}
