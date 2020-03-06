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
import moment from "moment"
import reservationService from "./services/reservationMethods"

// page imports
import LandingPage from "./Pages/Landingpage"
import Reservations from "./Pages/Reservations"
import Confirmation from "./Pages/Confirmation"
import AdminScreen from './Pages/AdminScreen';




const App = () => {

  const history = useHistory
  const now = moment()

  const minutes = (((now.minutes() + 7.5)/15 | 0) * 15) % 60; //Round off minutes to 15 minute intervals
  now.minute(minutes)
  
  const calcEndDate = now.clone().add(1, "H")

  
  const [allReseverations, setallReseverations] = useState([])
  const [newReservation, setNewReservation] = useState({ startTime: now, endTime: calcEndDate, Name: undefined, Heads: 0, Strangers: 0, Table: undefined, Duration: 0, Arrived: false}) //this is pushed into MongoBD when customer finishes their reservation
  console.log(newReservation);

  useEffect(() => {
    reservationService
      .getAll()
      .then(initialReservation => setallReseverations(initialReservation))
  }, [])

  
  return (
    <Router>

      {/* persistent components that need to remain on page despite the users current page (like a nav bar) can be placed here */}

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
      <Route
        path="/Confirmation"
        children={props => (
          <Confirmation
            newReservation={newReservation}
            history={history}
            {...props}
          />
         )}
       />
      <Route
        path="/AdminScreen"
        children={props => (
          <AdminScreen
            allReseverations={allReseverations}
            newReservation={newReservation}
            history={history}
            {...props}
          />
         )}
       />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))