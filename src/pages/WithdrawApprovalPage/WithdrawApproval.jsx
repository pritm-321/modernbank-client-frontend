import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import TopNavbar from "../../components/navbar/Navbar";

const Text = styled.div`
  color: #aaa;
  margin-left:10px;
`;
const Value = styled.div`
  font-size: 40px;
  margin-left: 25px;
`;

const Heading = styled.div`
  font-family: "Roboto";
  text-align: center;
  margin-bottom: 40px;
`;

const Timer=styled.div`
font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TimeWrapper = styled.div`
display: flex;
  justify-content: center;
`
const Info=styled.div`
max-width: 360px;
margin: 40px auto 0;
text-align: center;
font-size: 16px;
`
const MainDiv = styled.div`
margin-top: 150px;
`

const Button = styled.div`
text-align: center;
margin-top: 40px;
border-radius: 15px;
`

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Code expired...</div>;
  }

  return (
    <Timer>
    <div className="timer">
      <Text>
        <div className="text">Remaining</div>
      </Text>
      <Value>
        <div className="value">{remainingTime}</div>
      </Value>
      <Text>
        <div className="text">seconds</div>
      </Text>
    </div>
    </Timer>
  );
};

const WithdrawApproval = () => {
  const {id}=useParams()
  const history=useHistory()

    const moneyWithdraw=useSelector(state=>state.moneyWithdraw)
    const {withdrawCode} =moneyWithdraw

  return (
    <>
    <TopNavbar/>
    <MainDiv>
      <Heading>
        <h1>
          Your Transaction Id is: &nbsp;
          <b>{withdrawCode?.tid}</b>
          <br />
        </h1>
      </Heading>
      <TimeWrapper>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={100}
          colors={['#38b009', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[70, 50, 20, 0]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      </TimeWrapper>
      <Info>
      <p className="info">
       Present this code to the Bank Employee in our branch to complete the transaction.
      </p>
      </Info>
      <Button>
        <button className="button1" type="submit" onClick={()=> history.push(`/useraccount/${id}`)}>Return to Dashboard</button>
      </Button>
      
    </MainDiv>
    </>
  );
};

export default WithdrawApproval;
