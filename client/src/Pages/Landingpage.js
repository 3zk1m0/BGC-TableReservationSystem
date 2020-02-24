import React from 'react'

const LandingPage = ({history}) => {
    return (
        <>
        <h1>Welcome!</h1>
        <button onClick={() => history.push("/reservations")}>Make a reservation</button> {/* To go to the next page, push the page adress to history */}
        </>
    )
}

export default LandingPage