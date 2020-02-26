import React from 'react'

const Confirmation = ({newReservation}) => {

    return (
        <>
        <h1>Thank you for your reservation</h1>
        <p>Starting time: {newReservation.startTime.format("DD:MM:YYYY HH:MM")}</p>
        <p>Ending time: {!newReservation.endTime? "If you see this you shouldn't be here >:(" : newReservation.endTime.format("DD:MM:YYYY HH:MM")}</p>
        <p>Heads: {newReservation.Heads}</p>
        <p>Strangers: {newReservation.Strangers}</p>
        <p>Table: {newReservation.Table}</p>
        </>
    )
}

export default Confirmation