import "./transaction.css";
import React, { useState } from "react";
import TopNavbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";
import { moneyTransfer } from "../../actions/userTransactionActions";
import { useHistory } from "react-router-dom";

const Transaction = () => {
    const [recName, setRecName] = useState("");
    const [recAccNo, setRecAccNo] = useState("");
    const [amount, setAmount] = useState("");

    const {id}=useParams()

    const dispatch =useDispatch()
    const history=useHistory()


    const transferMoney = useSelector((state) => state.moneyTransfer);
    const {loading,error,success}=transferMoney;

const submitHandler=(e)=>{
    e.preventDefault();
    if(!recName || !recAccNo || !amount) return;
    dispatch(moneyTransfer(id,recAccNo,amount))
    history.push(`/transactionstatus/${id}`)
    // if(success === true){
    //  history.push(`/transactionsuccess/${id}`)
    // }
    // else{
    //     history.push(`/transactionunsuccessful/${id}`)
    // }
}
    
  return (
    <>
      <TopNavbar />
      <div className="bodyoftransaction">
        <div className="containeroftransaction">
          <form onSubmit={submitHandler}>
            <div className="transfer">
              <div className="titleoftransaction">Money Transfer</div>
              <br />
              <div className="input-boxes-oftransaction">
                <div className="input-box">
                  <i className="fa fa-user"></i>
                  <input
                    type="text"
                    className="receiverName-oftransaction"
                    placeholder="Recipient Name"
                    onChange={(e) => setRecName(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="input-box">
                  <i className="fa fa-hashtag"></i>
                  <input
                    type="number"
                    className="accountnumber-oftransaction"
                    placeholder="Account Number"
                    onChange={(e) => setRecAccNo(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="input-box">
                  <i className="fa fa-indian-rupee-sign"></i>
                  <input
                    type="number"
                    className="amount-oftransaction"
                    placeholder="Amount to be transferred"
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <br />
                <div className="button input-box">
                  <button
                    type="submit"
                    className="send-oftransaction"
                    value="Send"
                  >Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Transaction;
