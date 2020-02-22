import React from 'react'

const Heads = ({ newReservation, setNewReservation }) => {


    const handleAddHead = () => {
        setNewReservation({...newReservation, Heads: Heads + 1})
    }
    const handleRemoveHead = () => {
        setNewReservation({...newReservation, Heads: Heads - 1})
    }
    

    
    return (
    <div>
      <p>
        Heads: <input type="text" id="heads" defaultValue={newReservation.Heads} onInput={null}></input>
        <button type="button" onClick={handleAddHead}>+</button> 
        <button type="button" onClick={handleRemoveHead}>-</button>
      </p>
    </div>
    )
  }

export default Heads