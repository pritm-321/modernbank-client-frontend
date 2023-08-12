import React from 'react'
import Assistant from '../components/chatbot/Assistant'
import Hero from '../components/hero/Hero'
import TopNavbar from '../components/navbar/Navbar'
import Actions from '../components/user-actions/Actions'

const Homepage_inner = () => {
  return (
    <>
    <TopNavbar/>
    <Hero/>
    <Actions/>
    <Assistant/>
    </>
  )
}

export default Homepage_inner