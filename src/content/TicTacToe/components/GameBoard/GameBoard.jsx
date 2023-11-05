import classes from "./GameBoard.module.css";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({boardStateLog, squareCLicked}) {
//REMOVED TO PREVENT REPLICATION OF INFO
// const [newBoard, setNewBoard] = useState(initialBoard)

// function squareCLicked(rowIndex, colIndex){
//     changeActivePlayer();
//     setNewBoard((prevBoard) => {
//         const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])];
//         updatedBoard[rowIndex][colIndex] = activeSymbol;
//         return updatedBoard;
//     })    
// }
let board = initialBoard;
for(const stateLog of boardStateLog){
  board[stateLog.coordinate.x][stateLog.coordinate.y] = stateLog.symbol;
}

  return (
    <div>
      <ol className={classes.board}>
        {board.map((row, rowIndex) => (
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
