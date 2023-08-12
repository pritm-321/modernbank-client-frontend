import './transactionstatus.css'
import React from 'react'
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import TransactionUnsuccessful from '../transactionUnsuccessful/TransactionUnsuccessful';

const SVG=styled.div`
width: 100px;
  display: block;
  margin: 40px auto 0;
`

const TransactionStatus = () => {
    const history=useHistory()
    const {id}=useParams()

    

    const successStatus= useSelector(state=>state.moneyTransfer)
    const {success}=successStatus

    const TransactionSuccess=()=>{
        
        return(
            <div>
      <div className="wrapper2">
        <SVG>
        <svg viewBox="0 0 130.2 130.2" >
          <circle
            className="path circle"
            fill="none"
            stroke="#73AF55"
            stroke-width="6"
            stroke-miterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <polyline
            className="path check"
            fill="none"
            stroke="#73AF55"
            stroke-width="6"
            stroke-linecap="round"
            stroke-miterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
        </SVG>
        <p className="success">Transaction Successful</p>
        <br />
        <button className="button1" type="submit" onClick={()=>history.push(`/useraccount/${id}`)}>
          Return to home
        </button>
      </div>
    </div>
        )
    }

    const TransactionFailed=()=>{
      <div>
      <div className="wrapper3">
        <SVG>
          <svg viewBox="0 0 130.2 130.2">
            <circle
              className="path circle"
              fill="none"
              stroke="#D06079"
              stroke-width="6"
              stroke-miterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <line
              className="path line"
              fill="none"
              stroke="#D06079"
              stroke-width="6"
              stroke-linecap="round"
              stroke-miterlimit="10"
              x1="34.4"
              y1="37.9"
              x2="95.8"
              y2="92.3"
            />
            <line
              className="path line"
              fill="none"
              stroke="#D06079"
              stroke-width="6"
              stroke-linecap="round"
              stroke-miterlimit="10"
              x1="95.8"
              y1="38"
              x2="34.4"
              y2="92.2"
            />
          </svg>
        </SVG>
        <p className="error">Transaction Unsuccessful!!!</p>
        <br />
        <button
          className="button2"
          type="submit"
          onClick={() => history.push(`/useraccount/${id}`)}
        >
          Return to home
        </button>
        <button className="button2" type="submit" id="try" onClick={()=> history.goBack()}>
          Try again
        </button>
      </div>
    </div>

    }

  return (
    <div>
  {success === true ?( <TransactionSuccess/>) : success === false ? (<TransactionUnsuccessful/>):null}
        </div>
  )
}

export default TransactionStatus