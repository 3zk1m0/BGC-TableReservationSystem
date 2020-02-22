import React, { useState } from 'react'


const Time = (newReservation, setNewReservation) => {


const handleAddDuration = () => {
  
}
const handleRemoveDuration = () => {

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

let changeTime = (minutes) => {
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
        <input type="text" id="time" defaultValue="12:00" readOnly></input>
        <button type="button" onClick={onTimeForwardPress}>&gt;</button>
              
        Duration: <input type="text" id="duration" defaultValue={newReservation.Duration} onInput={null}></input>
        <button type="button" onClick={handleAddDuration}>+</button>
        <button type="button" onClick={handleRemoveDuration}>-</button>
      </p>
    )
  }

export default Time