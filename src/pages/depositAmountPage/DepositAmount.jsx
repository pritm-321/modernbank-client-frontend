import "./depositAmount.css";
import React from "react";
import TopNavbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { moneyDepositACtion } from "../../actions/userTransactionActions";

function DepositAmount() {
  const [amount, setAmount] = useState('');

  const {id}=useParams();

  const history=useHistory();

  const dispatch = useDispatch();
  const moneyDeposit= useSelector(state=>state.moneyDeposit);
  const {loading, error}=moneyDeposit;

  const submitHandler=(e)=>{
    e.preventDefault();
    if(!amount) return;
    dispatch(moneyDepositACtion(id,amount))
    history.push(`/depositapprove/${id}`)
  }


  return (
    <>
      <TopNavbar />
      <div class="depositForm">
        <form class="form2" onSubmit={submitHandler}>
          <h1 class="heading">Deposit Your Money</h1>
          <div class="deposit">
            <br />
            <input
              type="number"
              name="depositAmount"
              id="Amount"
              placeholder="Enter your deposit amount"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="button input-box-ofwithdraw" id='withdraw-buttons'>
            <button className="button" type="submit" id="withdrawCancelbutton" onClick={()=>history.goBack()}>Cancel</button>
              <button className="button" type="submit" id="withdrawAmtbutton">Proceed</button>
            </div>
        </form>
      </div>
    </>
  );
}

export default DepositAmount;
