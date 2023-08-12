import React from 'react'
import TopNavbar from '../components/navbar/Navbar'
import UserAccounts from '../components/user-accounts/UserAccounts'
import Hero from '../components/hero/Hero'
import Assistant from '../components/chatbot/Assistant'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'

const Button = styled.div`
text-align: center;
margin-top: 40px;
border-radius: 15px;
`


const Homepage = () => {
  const {id} = useParams()
  const history = useHistory()
  return (
    <>
    <TopNavbar/>
    <Hero/>

    <UserAccounts/>

    <Button >
        <button className="button1" type="submit" onClick={()=> history.push(`/createaccount/${id}`)} >Create New Account</button>
      </Button>
    
    <Assistant/>

    </>
  )
}

export default Homepage