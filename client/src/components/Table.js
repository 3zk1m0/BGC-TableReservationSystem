import React from 'react'

const Table = ({tableNumber, newReservation, setNewReservation, }) => {

    const elementId = `table${tableNumber}`
    const handleTableSelection = () => {
        console.log("clicked!")
        setNewReservation({...newReservation, Table: Number(tableNumber)})
    }

    return (
    <div id={elementId} onClick={handleTableSelection} className={newReservation.Table === Number(tableNumber)? "tableactive" : "table"}>{tableNumber} </div>
    )
}

export default Table