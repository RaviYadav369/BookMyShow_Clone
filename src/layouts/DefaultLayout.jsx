import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'

const DefaultLayout = (Component) =>
({...props}) => {
  
  return (

    <div>
      <Navbar />
      <Component {...props} />
      <Footer />
    </div>
  )
}

export default DefaultLayout