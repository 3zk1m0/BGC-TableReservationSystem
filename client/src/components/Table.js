import React from 'react'

const Table = ({tableNumber, setNewReservation, newReservation}) => {
    let elementId = `table${tableNumber}`

    const handleTableSelection = () => {
        setNewReservation({...newReservation, Table: Number(tableNumber)})
    }

    return (
    <div id={elementId} onClick={handleTableSelection} className="table">{tableNumber} </div>
    )
}

export default Table