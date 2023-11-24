import { useContext, useState } from "react";
import classes from "./VacationFinder.module.css";
import LocationCard from "./LocationCard/LocationCard";
import DestinationContextProvider, { selectedDestinationContext } from './ContextStore/DestinationCtx';

export default function VacationFinder() {  

  return (
    <>
      <DestinationContextProvider>
        <div className={classes.container}>
          <h1>Click to remove</h1>
          <LocationCard selectedDest={true} />
          <h1>Click to add</h1>
          <LocationCard selectedDest={false} />
        </div>
      </DestinationContextProvider>
    </>
  );
}
