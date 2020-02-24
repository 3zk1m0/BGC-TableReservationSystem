import React from 'react'


const Strangers = ( {newReservation, setNewReservation} ) => {

  const handleAddHead = () => {
    const newHeads = newReservation.Strangers + 1
      setNewReservation({...newReservation, Strangers: newHeads})
  }
  const handleRemoveHead = () => {
      const newHeads = newReservation.Strangers - 1
      setNewReservation({...newReservation, Strangers: newHeads})
  }
    return (
      <p>
        Strangers: <input type="text" id="strangers" value={newReservation.Strangers} readOnly={true}></input>
        <button type="button" onClick={handleAddHead}>+</button>
        <button type="button" onClick={handleRemoveHead}>-</button>
      </p>
    )
  }

export default Strangers