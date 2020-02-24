import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

// page imports
import LandingPage from "./Pages/Landingpage"
import Reservations from "./Pages/Reservations"




const App = () => {
  const history = useHistory
  
  const now = new Date()
  const currentDate = now.getDate()

  const minutes = (((now.getMinutes() + 7.5)/15 | 0) * 15) % 60; //Round off minutes to 15 minute intervals
  now.setMinutes(minutes)
  
  const [allReseverations, setallReseverations] = useState([])
  const [newReservation, setNewReservation] = useState({ startTime: now, endTime: undefined, Name: undefined, Heads: 0, Strangers: 0, Table: undefined, Duration: 0, Arrived: false}) //this is pushed into MongoBD when customer finishes their reservation
  console.log(newReservation);
  
  return (
    <Router>
      {/* persistant components that need to remain on page despite the users current page (like a nav bar) can be placed here */}
      <Switch >
      <Route
        exact={true}
        path="/"
        children={props => (
          <LandingPage
          history={history}
          {...props}
          />
          )}
        />
      <Route
        exact={true}
        path="/reservations"
        children={props => (
          <Reservations
          allReseverations={allReseverations}
          newReservation={newReservation}
          setNewReservation={setNewReservation}
          {...props}
          />
          )}
        />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))