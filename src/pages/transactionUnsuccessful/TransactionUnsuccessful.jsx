import "./transactionUnsuccessful.css";
import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const SVG = styled.div`
  width: 100px;
  display: block;
  margin: 40px auto 0;
`;

function TransactionUnsuccessful() {
  const history = useHistory();
  const { id } = useParams();
  return (
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
  );
}

export default TransactionUnsuccessful;
