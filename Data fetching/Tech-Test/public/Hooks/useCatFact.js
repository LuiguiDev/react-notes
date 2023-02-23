import { useState, useEffect } from "react";
import { getNewFact } from "../Services/facts";

export function useCatFact () {
  const [fact, setFact] = useState();
  const [cropped, setCropped] = useState();

  // I capsuled the setState in order to return a function that can hanlde the setState outside the hook, is a mistake export the setState directly
  function refreshFact () {
    getNewFact().then(newFact => {
      setFact(newFact);
      setCropped(newFact.split(' ', 3).join(' '))
    })
  }

  useEffect(refreshFact, []);

  return { fact, refreshFact, cropped} 
}
