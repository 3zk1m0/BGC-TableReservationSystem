import React, { useState, useEffect } from 'react'
import moment from "moment"

const Time = ({newReservation, setNewReservation}) => {
  
  let [duration, setDuration] = useState(60)

  console.log(newReservation.startTime)
  console.log(newReservation.endTime)

  const handleDateSelection = (event) => {

    const hour = newReservation.startTime.hour()
    const minutes = newReservation.startTime.minute()

    const newDate = moment(`${event.target.value} ${hour}:${minutes}`, "YYYY-MM-DD HH:mm")
    const newEndDate = newDate.clone().add(duration, "minutes")
  

    if(newDate.isValid()) { // check whether the date input is a valid date object
    setNewReservation({...newReservation, startTime: newDate, endTime: newEndDate})
    } else {
      return
    }
  
  }

  const handleChangeTime = (change) => {

    const newDate = newReservation.startTime.clone().add(change, 'm')
    const newEndDate = newDate.clone().add(duration, "minutes")

    setNewReservation({...newReservation, startTime: newDate, endTime: newEndDate})
  
  }
  
  const handleDurationChange = (change) => {

    if(duration + change < 60) {
      alert("Minimum visiting time is one hour")
      return
    }

    setDuration(duration += change)

      const newEndDate = newReservation.endTime.clone().add(change, "minutes")

      setNewReservation({...newReservation, endTime: newEndDate})
    }

    return (  
      <div className="Time">
        <div>
          Select Date
          <input type="date" onChange={handleDateSelection}></input>
        </div>
        <div>
        Start time:
        <button type="button" onClick={() => handleChangeTime(-15)}>&lt;</button>
        <input type="time" id="time" 
        value={newReservation.startTime.format("HH:mm")} 
        onChange={(e) => console.log(e.target.value)} 
        min={undefined /* function to calculate opening time on selected day */ } 
        max={undefined /* function to calculate closing time on selected day */ }>
        </input>
        <button type="button" onClick={() => handleChangeTime(15)}>&gt;</button>
        </div>
        <div>   
        Duration: <input type="text" id="duration" value={duration} readOnly onInput={null}></input>
        <button type="button" onClick={() => handleDurationChange(15)}>+</button>
        <button type="button" onClick={() => handleDurationChange(-15)}>-</button>
        </div> 
      </div>
    )
  }

export default Time