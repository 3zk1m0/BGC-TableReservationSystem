import React from 'react'

const Table = ({tableNumber, newReservation, setNewReservation, }) => {

    const elementId = `table${tableNumber}`
    
    const handleTableSelection = () => {
        if(newReservation.Table === Number(tableNumber)) {
            setNewReservation({...newReservation, Table: 0})
        } else {
            setNewReservation({...newReservation, Table: Number(tableNumber)})
        }
        console.log("clicked!")
        
    }

    return (
    <div id={elementId} onClick={handleTableSelection} className={newReservation.Table === Number(tableNumber)? "tableactive" : "table"}>{tableNumber} </div>
    )
}

export default Table