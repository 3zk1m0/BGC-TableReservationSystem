import React from 'react'

const Reservation = ({reserveration}) => {
    return (
        <li class="reservation" >
        <p>Starting time: {reserveration.startTime.format("DD:MM:YYYY HH:MM")}</p>
        <p>Ending time: {reserveration.endTime.format("DD:MM:YYYY HH:MM")}</p>
        <p>Heads: {reserveration.Heads}</p>
        <p>Strangers: {reserveration.Strangers}</p>
        <p>Table: {reserveration.Table}</p>
        </li>
    )
}

export default Reservation