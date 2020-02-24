import React, { useState } from 'react'


const Time = ({newReservation, setNewReservation}) => {
  
  let [duration, setDuration] = useState(0)
  const handleDateSelection = (event) => {

    const date = new Date(event.target.value)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const hour = newReservation.startTime.getHours()
    const minutes = newReservation.startTime.getMinutes()

    const newDate = new Date(year, month, day, hour, minutes)
  
    setNewReservation({...newReservation, startTime: newDate})
  
  }

  const handleChangeTime = (change) => {
    const year = newReservation.startTime.getFullYear()
    const month = newReservation.startTime.getMonth()
    const day = newReservation.startTime.getDate()
    const hour = newReservation.startTime.getHours()
    const minutes = newReservation.startTime.getMinutes()

    const newminutes = minutes + change
    const newDate = new Date(year, month, day, hour, newminutes)
  
    setNewReservation({...newReservation, startTime: newDate})
    console.log(newReservation)
  }
  const handleDurationChange = (change) => {

    if(duration + change < 0) {
      alert("No ಠ_ಠ")
      return
    }
    setDuration(duration += change)
    if(!newReservation.endTime) {
      const year = newReservation.startTime.getFullYear()
      const month = newReservation.startTime.getMonth()
      const day = newReservation.startTime.getDate()
      const hour = newReservation.startTime.getHours()
      const minutes = newReservation.startTime.getMinutes()

      const newminutes = minutes + change

      const newDate = new Date(year, month, day, hour, newminutes)
      setNewReservation({...newReservation, endTime: newDate})

    } else {
      const year = newReservation.endTime.getFullYear()
      const month = newReservation.endTime.getMonth()
      const day = newReservation.endTime.getDate()
      const hour = newReservation.endTime.getHours()
      const minutes = newReservation.endTime.getMinutes()

      const newminutes = minutes + change

      const newDate = new Date(year, month, day, hour, newminutes)
      setNewReservation({...newReservation, endTime: newDate})
    }
}






    return (  
      <p>
        <input type="date" onChange={handleDateSelection}></input>
        Start time:
        <button type="button" onClick={() => handleChangeTime(-15)}>&lt;</button>
        <input type="text" id="time" value={`${newReservation.startTime.getHours()}:${!newReservation.startTime.getMinutes() ? "00" : newReservation.startTime.getMinutes()}`} readOnly></input>
        <button type="button" onClick={() => handleChangeTime(15)}>&gt;</button>
              
        Duration: <input type="text" id="duration" value={duration} readOnly onInput={null}></input>
        <button type="button" onClick={() => handleDurationChange(15)}>+</button>
        <button type="button" onClick={() => handleDurationChange(-15)}>-</button>
      </p>
    )
  }

export default Time