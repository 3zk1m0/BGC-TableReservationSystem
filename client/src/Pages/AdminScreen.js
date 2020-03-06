

import React from 'react'

const AdminScreen = ({ allReseverations }) => {

    const rows = ( ) => allReseverations.map(reserveration =>
        <Reservation
          key={reserveration.id}
          note={reserveration}
        />
      )
    return (
        <div>
            <ul>
            {rows()}
            </ul>
        </div>
    )
}

export default AdminScreen
