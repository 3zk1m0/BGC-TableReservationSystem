import React from 'react'

const Confirmation = ({newReservation}) => {

    return (
        <>
        <h1>Thank you for your reservation</h1>
        <p>Starting time: {newReservation.startTime.toString()}</p>
        <p>Ending time: {!newReservation.endTime? "none yet" : newReservation.endTime.toString()}</p>
        <p>Heads: {newReservation.Heads}</p>
        <p>Strangers: {newReservation.Strangers}</p>
        <p>Table: {newReservation.Table}</p>
        </>
    )
}

export default Confirmation