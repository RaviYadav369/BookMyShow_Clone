import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Footer from '../components/Footer/Footer'

const DefaultLayout = (Component) =>
({...props}) => {
  
  return (

    <>
      <Navbar />
      <Component {...props} />
      <Footer />
    </>
  )
}

export default DefaultLayout