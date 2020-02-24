import React, { useState } from 'react'


const Time = ({newReservation, setNewReservation}) => {
  console.log(setNewReservation);
  

const handleDataSelection = (event) => {

    const date = new Date(event.target.value)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const hour = newReservation.startTime.getHours()
    const minutes = newReservation.startTime.getMinutes()

    const newDate = new Date(year, month, day, hour, minutes)
  
    setNewReservation({...newReservation, startTime: newDate})
  
  }

const handleAddDuration = () => {


}

const handleRemoveDuration = () => {
  const newDuration = newReservation.Duration - 15
  setNewReservation({...newReservation, Duration: newDuration})
}

let onTimeBackwardPress = () => {

  const year = newReservation.startTime.getFullYear()
  const month = newReservation.startTime.getMonth()
  const day = newReservation.startTime.getDay()

  const hour = newReservation.startTime.getHours()
  const minutes = newReservation.startTime.getMinutes() - 15

  const newDate = new Date(year, month, day, hour, minutes)

  setNewReservation({...newReservation, startTime: newDate})
  console.log(newReservation)
}

let onTimeForwardPress = () => {

  const year = newReservation.startTime.getFullYear()
  const month = newReservation.startTime.getMonth()
  const day = newReservation.startTime.getDay()
  const hour = newReservation.startTime.getHours()

  const newMinutes = newReservation.startTime.getMinutes() + (15 * 60 * 1000)
  console.log(newMinutes)
  const minutes = newReservation.startTime.setMinutes(newMinutes)
  console.log(minutes)

  const newDate = new Date(year, month, day, hour, minutes)

  setNewReservation({...newReservation, startTime: newDate})
  console.log(newReservation)
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
        <input type="date" onChange={handleDataSelection}></input>
        Start time:
        <button type="button" onClick={onTimeBackwardPress}>&lt;</button>
        <input type="text" id="time" value={`${newReservation.startTime.getHours()}:${!newReservation.startTime.getMinutes() ? "00" : newReservation.startTime.getMinutes()}`} readOnly></input>
        <button type="button" onClick={onTimeForwardPress}>&gt;</button>
              
        Duration: <input type="text" id="duration" value={newReservation.Duration} onInput={null}></input>
        <button type="button" onClick={handleAddDuration}>+</button>
        <button type="button" onClick={handleRemoveDuration}>-</button>
      </p>
    )
  }

export default Time