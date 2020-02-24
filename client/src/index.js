import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Heads from "./components/Heads";
import Strangers from "./components/Strangers";
import Time from "./components/Time"
import Tables from "./components/Tables"



const App = () => {

  const now = new Date()
  const currentDate = now.getDate()

  const minutes = (((now.getMinutes() + 7.5)/15 | 0) * 15) % 60; //Round off minutes to 15 minute intervals
  now.setMinutes(minutes)
  
  const [allReseverations, setallReseverations] = useState([])
  const [newReservation, setNewReservation] = useState({ startTime: now, endTime: undefined, Name: undefined, Heads: 0, Strangers: 0, Table: undefined, Duration: 0, Arrived: false}) //this is pushed into MongoBD when customer finishes their reservation
  console.log(newReservation);
  
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
        allReseverations={allReseverations}
        newReservation={newReservation}
        setNewReservation={setNewReservation}
     />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))