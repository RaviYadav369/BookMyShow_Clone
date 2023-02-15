import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import EventFooter from '../components/Footer/Event_Footer'

const EventLayout = (Component) =>
({...props}) => {
  return (
    <div>
      <Navbar />
      <Component {...props} />
      <EventFooter />
    </div>
  )
}

export default EventLayout