import React from "react";

import Heads from "../components/Heads";
import Strangers from "../components/Strangers";
import Time from "../components/Time"
import Tables from "../components/Tables"

const Reservations = ({newReservation, setNewReservation, allReseverations, history}) => {


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
            <button onClick={() => history.push("/confirmation")}>Finish reservation</button> {/* To go to the next page, push the page adress to history */}

        </>
    )
}

export default Reservations

