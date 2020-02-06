import React from 'react'
import ReactDOM from 'react-dom'

//Custom imports.
import {
  cache, onHeadsInput, onStrangersInput, onDurationInput, onAddHeadsPress, onRemoveHeadsPress, onAddStrangersPress,
  onRemoveStrangersPress, onAddDurationPress, onRemoveDurationPress
} from "./numberFields"

import {
  onTimeBackwardPress, onTimeForwardPress
} from "./timeFields"

import {
  Tables
} from "./tableScripts"

const App = () => {
  return (
    <>
     <Heads />
     <Strangers />
     <Time />
     <Tables />
    </>
  )
}

const Heads = () => {
  return (
    <p>
      Heads: <input type="text" id="heads" defaultValue={cache.heads} onInput={onHeadsInput}></input>
      <button type="button" onClick={onAddHeadsPress}>+</button>
      <button type="button" onClick={onRemoveHeadsPress}>-</button>
    </p>
  )
}

const Strangers = () => {
  return (
    <p>
      Strangers: <input type="text" id="strangers" defaultValue={cache.strangers} onInput={onStrangersInput}></input>
      <button type="button" onClick={onAddStrangersPress}>+</button>
      <button type="button" onClick={onRemoveStrangersPress}>-</button>
    </p>
  )
}

const Time = () => {
  return (  
    <p>
      <input type="date"></input>
      Start time:
      <button type="button" onClick={onTimeBackwardPress}>&lt;</button>
      <input type="text" id="time" defaultValue="12:00" readOnly></input>
      <button type="button" onClick={onTimeForwardPress}>&gt;</button>
            
      Duration: <input type="text" id="duration" defaultValue={cache.duration} onInput={onDurationInput}></input>
      <button type="button" onClick={onAddDurationPress}>+</button>
      <button type="button" onClick={onRemoveDurationPress}>-</button>
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))