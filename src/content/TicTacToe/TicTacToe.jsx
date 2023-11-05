import classes from "./TicTacToe.module.css";
import GameBoard from "./components/GameBoard/GameBoard";
import Logging from "./components/Logging/Logging";
import Playercard from "./components/Playercard/Playercard";
import { useState } from "react";

export default function TicTacToe() {
  const [player1name, setPlayer1name] = useState("PLAYER 1");
  const [player2name, setPlayer2name] = useState("PLAYER 2");
  const [activePlayer, setActivePlayer] = useState("X");
  const [boardStateLog, setBoardStateLog] = useState([]);

  const changePlayer1Name = (val) => {
    setPlayer1name(val);
  };

  const changePlayer2Name = (val) => {
    setPlayer2name(val);
  };

  const changeActivePlayer = () => {
    setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
  };

  function squareCLicked(rowIndex, colIndex) {
    changeActivePlayer();
    setBoardStateLog((prevBoard) => {
      let currPlayer;
      if (prevBoard.length > 0 && prevBoard[0].symbol === "X") {
        currPlayer = "O";
      } else {
        currPlayer = "X";
      }
      const newBoardState = [{coordinate : {x : rowIndex, y : colIndex}, symbol : currPlayer}, ...prevBoard];
      return newBoardState;
    });
  }

  return (
    <>
      <div className={classes.allcontainer}>
        <div className={classes.playercontainer}>
          <ol>
            <Playercard
              playerName={player1name}
              playerSymbol="X"
              onChangeName={(val) => changePlayer1Name(val)}
              activePlayer={activePlayer === "X" ? "active" : null}
            />
            <Playercard
              playerName={player2name}
              playerSymbol="O"
              onChangeName={(val) => changePlayer2Name(val)}
              activePlayer={activePlayer === "O" ? "active" : null}
            />
          </ol>
        </div>
        <div>
          <GameBoard
            boardStateLog={boardStateLog}
            squareCLicked={(rowIndex, colIndex) =>
              squareCLicked(rowIndex, colIndex)
            }
          />
        </div>
      </div>
      <div>
          <Logging
            boardStateLog={boardStateLog}  
            player1name={player1name} 
            player2name={player2name}         
          />
        </div>
    </>
  );
}
