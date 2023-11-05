import classes from "./TicTacToe.module.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Playercard from "./components/Playercard/Playercard";
import { useState } from "react";

export default function TicTacToe() {
  const [player1name, setPlayer1name] = useState("PLAYER 1");
  const [player2name, setPlayer2name] = useState("PLAYER 2");
  const [activePlayer, setActivePlayer] = useState("X");

  const changePlayer1Name = (val) => {
    setPlayer1name(val);
  };

  const changePlayer2Name = (val) => {
    setPlayer2name(val);
  };

  const changeActivePlayer = () => {
    console.log("Player change")
    setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
  };

  return (
    <>
      <div className={classes.allcontainer}>
        <div className={classes.playercontainer}>
          <ol>
            <Playercard
              playerName={player1name}
              playerSymbol="X"
              onChangeName={(val) => changePlayer1Name(val)}
              activePlayer = {activePlayer === 'X'?"active":null}
            />
            <Playercard
              playerName={player2name}
              playerSymbol="O"
              onChangeName={(val) => changePlayer2Name(val)}
              activePlayer = {activePlayer === 'O'?"active":null}
            />
          </ol>
        </div>
        <div>
          <GameBoard activeSymbol={activePlayer} changeActivePlayer={changeActivePlayer}/>
        </div>
      </div>
    </>
  );
}
