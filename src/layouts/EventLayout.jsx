import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import EventFooter from '../components/Footer/Event_Footer'

const EventLayout = (Component) =>
({...props}) => {
  return (
    <>
      <Navbar />
      <Component {...props} />
      <EventFooter />
    </>
  )
}

export default EventLayout