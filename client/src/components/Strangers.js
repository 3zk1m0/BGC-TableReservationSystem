import React from 'react'


const Strangers = ( {newReservation, setNewReservation} ) => {

  const handleAddHead = () => {
    setNewReservation({...newReservation, Strangers: Strangers + 1})
}
const handleRemoveHead = () => {
    setNewReservation({...newReservation, Strangers: Strangers - 1})
}


    return (
      <p>
        Strangers: <input type="text" id="strangers" defaultValue={newReservation.Strangers} onInput={null}></input>
        <button type="button" onClick={handleAddHead}>+</button>
        <button type="button" onClick={handleRemoveHead}>-</button>
      </p>
    )
  }

export default Strangers