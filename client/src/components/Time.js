import React, { useState } from 'react'


const Time = (newReservation, setNewReservation) => {


const handleAddDuration = () => {
  const newDuration = newReservation.Duration + 15
  setNewReservation({...newReservation, Duration: newDuration})
}
const handleRemoveDuration = () => {
  const newDuration = newReservation.Duration - 15
  setNewReservation({...newReservation, Duration: newDuration})
}

  let onTimeBackwardPress = () => {
    changeTime(-15)
}

let onTimeForwardPress = () => {
    changeTime(15)
}

let getTime = () => {
    let inputElement = document.querySelector("#time")
    let hoursAndMinutes = inputElement.value.split(":")

    return new Date(2000, 1, 1, hoursAndMinutes[0], hoursAndMinutes[1]).getTime()
}

const changeTime = (minutes) => {
    let time = getTime()
    time += minutes * 60 * 1000
    
    let date = new Date()
    date.setTime(time)

    let minuteString = ("0" + date.getMinutes()).slice(-2)
    document.querySelector("#time").value = `${date.getHours()}:${minuteString}`
}

    return (  
      <p>
        <input type="date"></input>
        Start time:
        <button type="button" onClick={onTimeBackwardPress}>&lt;</button>
        <input type="text" id="time" value={newReservation.Time} readOnly></input>
        <button type="button" onClick={onTimeForwardPress}>&gt;</button>
              
        Duration: <input type="text" id="duration" value={newReservation.Duration} onInput={null}></input>
        <button type="button" onClick={handleAddDuration}>+</button>
        <button type="button" onClick={handleRemoveDuration}>-</button>
      </p>
    )
  }

export default Time