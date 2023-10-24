import classes from './TimerController.module.css'
import Timer from '../TimerCards/Timer'

function TimerController(){

return(
    <div className={classes.container}>
    <Timer title="Easy" style={{color:'limegreen'}} targetTime={5}/>
    <Timer title="Medium" style={{color:'yellow'}} targetTime={3}/>
    <Timer title="Hard" style={{color:'red'}} targetTime={1}/>
    </div>
)

}

export default TimerController