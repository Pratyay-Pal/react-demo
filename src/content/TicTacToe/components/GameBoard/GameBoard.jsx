import { useState } from "react";
import classes from "./GameBoard.module.css";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({activeSymbol, changeActivePlayer}) {
const [newBoard, setNewBoard] = useState(initialBoard)

function squareCLicked(rowIndex, colIndex){
    changeActivePlayer();
    setNewBoard((prevBoard) => {
        const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIndex][colIndex] = activeSymbol;
        return updatedBoard;
    })    
}

  return (
    <div>
      <ol className={classes.board}>
        {newBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => squareCLicked(rowIndex, colIndex)}>{col}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
