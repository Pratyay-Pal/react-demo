import classes from './Logging.module.css'

export default function Logging({boardStateLog, player1name, player2name}){
    return(<ol className={classes.logging}>
        {boardStateLog.map((log) => (
            <li key={`${log.coordinate.x}${log.coordinate.y}`}>{log.symbol === "X"? player1name : player2name} placed {log.symbol} at {log.coordinate.x},{log.coordinate.y}</li>
        ))}
    </ol>);
}