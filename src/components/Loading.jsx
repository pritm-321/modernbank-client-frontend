import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import styled from 'styled-components';

const Loader=styled.div`
text-align: center;
background-color: #ffff;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 10vh;
`
const H2=styled.div`
text-align: center;
margin-top: 300px;
z-index: 9999;
`

const Loading = (props) => {
  return (
    <>
    <H2>
    <h2>{props.loadtext}</h2>
    </H2>
    <Loader>
      
        <PropagateLoader
        className='loader'
         color="#0aa319"
         size={30}
         />
    
    </Loader>
    </>
  )
}

export default Loading