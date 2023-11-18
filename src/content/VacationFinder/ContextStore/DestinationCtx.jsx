import { createContext, useState } from "react";
import {AVAILABLE_PLACES} from '../locationData.js'

export const selectedDestinationContext = createContext({
  destination: [],
  changeDestination: () => {},
  addRemoveDest: () => {}
});

export default function DestinationContextProvider({children}) {
  const [selectedDest, setselectedDest] = useState([]);  

  const remainingDestUpdate = (destination) => {
    const remainingDest = [...AVAILABLE_PLACES];
    destination.forEach((selDest) => {      
      const idOfSelDest = remainingDest.findIndex((avDest) => {
        return selDest.id === avDest.id;
      });
      remainingDest.splice(idOfSelDest, 1);
    });
    return remainingDest;
  };

  const addRemoveDest = (id, action) => {
    if (action === "remove"){
      setselectedDest((prevDest) => {
        const updatedDest = [...prevDest]
        const indexOfDest = prevDest.findIndex((dest) => {
          return id === dest.id
        })
        updatedDest.splice(indexOfDest, 1)
        console.log(id+" is being removed")
        return updatedDest;
      })
      
    }
    else if (action === "add"){
      setselectedDest((prevDest) => {
        const newDest = AVAILABLE_PLACES.find((dest) => {
          return dest.id === id
        })
        const updatedDest = [...prevDest, newDest]
        console.log(id+" is being added")
        return updatedDest;
      })
    }
  }

  const destCtx = {
    destination : selectedDest,
    remainingDestUpdate : remainingDestUpdate,
    addRemoveDest : addRemoveDest
  }

  return(<>
        <selectedDestinationContext.Provider value = {destCtx}>
            {children}
        </selectedDestinationContext.Provider>
    </>)
}
