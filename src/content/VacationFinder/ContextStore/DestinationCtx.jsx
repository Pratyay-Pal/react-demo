import { createContext, useState, useEffect } from "react";
import {AVAILABLE_PLACES} from '../locationData.js'
import { DistanceCalculator } from "../DistanceCalculator/DistanceCalculator";

export const selectedDestinationContext = createContext({
  destination: [],
  changeDestination: () => {},
  addRemoveDest: () => {}
});

export default function DestinationContextProvider({children}) {
  const [selectedDest, setselectedDest] = useState(JSON.parse(localStorage.getItem('selectedDest')) || []);  
  const [sortedDest, setSortedDest] = useState(AVAILABLE_PLACES);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Location Retrieved")
      const sortedDest = DistanceCalculator(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude)
      setSortedDest(sortedDest)
    });
  }, [])  

  const remainingDestUpdate = (destination) => {
    const remainingDest = [...sortedDest];
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
      const storedSelectedDest = JSON.parse(localStorage.getItem('selectedDest')) || []
      if(storedSelectedDest.indexOf(id) === -1){
        storedSelectedDest.splice((storedDest) => {
          return storedDest.id === id
        }, 1)
        localStorage.setItem(
          'selectedDest',
          JSON.stringify(storedSelectedDest)
        )
      }
    }
    else if (action === "add"){
      setselectedDest((prevDest) => {
        const newDest = sortedDest.find((dest) => {
          return dest.id === id
        })
        const updatedDest = [...prevDest, newDest]
        console.log(id+" is being added")
        return updatedDest;
      })
      const storedSelectedDest = JSON.parse(localStorage.getItem('selectedDest')) || []
      if(storedSelectedDest.indexOf(id) === -1){
        const newDest = sortedDest.find((dest) => {
          return dest.id === id
        })
        localStorage.setItem(
          'selectedDest',
          JSON.stringify([newDest, ...storedSelectedDest])
        )
      }
    }

    
    console.log(localStorage.getItem('selectedDest'))
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
