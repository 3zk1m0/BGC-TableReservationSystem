import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Heads from "./components/Heads";
import Strangers from "./components/Strangers";
import Time from "./components/Time"
import Tables from "./components/Tables"



const App = () => {

  const now = new Date()
  const currentDate = now.getDate()

  const minutes = (((now.getMinutes() + 7.5)/15 | 0) * 15) % 60;
  const time = now.getHours() + ":" + minutes
  
  const [allReseverations, setallReseverations] = useState([])
  const [newReservation, setNewReservation] = useState({ Date: currentDate, Time: time, Name: undefined, Heads: 0, Strangers: 0, Table: undefined, Duration: 0}) //this is pushed into MongoBD when customer finishes their reservation
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
        newReservation={newReservation}
        setNewReservation={setNewReservation}
     />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))