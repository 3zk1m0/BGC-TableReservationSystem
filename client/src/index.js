import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Heads from "./components/Heads";
import Strangers from "./components/Strangers";
import Time from "./components/Time"
import Tables from "./components/Tables"



const App = () => {

  const [allReseverations, setallReseverations] = useState([])
  const [newReservation, setNewReservation] = useState({ Date: undefined, Time: undefined, Name: undefined, Heads: 0, Strangers: 0, Table: undefined, Duration: 0})
  console.log("Poop");
  
  return (
    <>
     <Heads 
      newReservation={newReservation}
      setNewReservation={setNewReservation}
     />
     <Strangers 
      newReservation={newReservation}
      setNewReservation={setNewReservation}
     />
     <Time 
        newReservation={newReservation}
        setNewReservation={setNewReservation}
     />
     <Tables 
        newReservation={newReservation}
        setNewReservation={setNewReservation}
     />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))