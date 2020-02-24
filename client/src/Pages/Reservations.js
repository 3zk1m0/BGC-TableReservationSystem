import React from "react";

import Heads from "../components/Heads";
import Strangers from "../components/Strangers";
import Time from "../components/Time"
import Tables from "../components/Tables"

const Reservations = ({newReservation, setNewReservation, allReseverations}) => {


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

export default Reservations

