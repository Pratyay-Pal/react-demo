import classes from "./TicTacToe.module.css";
import Playercard from "./components/Playercard/Playercard";
import { useState } from "react";

export default function TicTacToe() {
  const [player1name, setPlayer1name] = useState('PLAYER 1');
  const [player2name, setPlayer2name] = useState('PLAYER 2');

  const changePlayer1Name = (val) => {
    setPlayer1name(val)
  }

  const changePlayer2Name = (val) => {
    setPlayer2name(val)
  }

  return (
    <>
      <div className={classes.allcontainer}>
          <div className={classes.playercontainer}>
            <ol>
              <Playercard playerName={player1name} playerSymbol='X' onChangeName={(val) => changePlayer1Name(val)}/>
              <Playercard playerName={player2name} playerSymbol='O' onChangeName={(val) => changePlayer2Name(val)}/>
            </ol>
          </div>
        </div>
    </>
  );
}
