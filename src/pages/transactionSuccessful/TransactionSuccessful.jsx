// import "./transactionSuccessful.css";
import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const SVG=styled.div`
width: 100px;
  display: block;
  margin: 40px auto 0;
`

const TransacttionSuccesful = () => {
  const history=useHistory()
  const {id}=useParams()
  return (
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
  );
};

export default TransacttionSuccesful;
