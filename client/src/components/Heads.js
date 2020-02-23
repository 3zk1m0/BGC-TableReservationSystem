import React from 'react'

const Heads = ({ newReservation, setNewReservation }) => {


    const handleAddHead = () => {
      const newHeads = newReservation.Heads + 1

        setNewReservation({...newReservation, Heads: newHeads})
    }
    const handleRemoveHead = () => {
        const newHeads = newReservation.Heads - 1
        setNewReservation({...newReservation, Heads: newHeads})
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