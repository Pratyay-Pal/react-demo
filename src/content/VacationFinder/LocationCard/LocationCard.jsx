import classes from "./LocationCard.module.css";
import { useContext } from "react";
import { selectedDestinationContext } from "../ContextStore/DestinationCtx";

export default function LocationCard({selectedDest}) {
  const {destination, remainingDestUpdate, addRemoveDest} = useContext(selectedDestinationContext);
  let destList = [];
  if (selectedDest){
    destList=[...destination]
  }
  else{
    destList=remainingDestUpdate(destination);
  }
  return (
    <>
      {destList.length === 0 && <p className="fallback-text">Loading</p>}
      {destList.length > 0 && (
        <ul className={classes.dest}>
          {destList.map((dest) => (
            <li key={dest.id} className={classes.destitem}>
              <button onClick={() => addRemoveDest(dest.id, !selectedDest?"add":"remove")}>
                <img src={dest.image.src} alt={dest.image.alt} />
                <h3>{dest.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
