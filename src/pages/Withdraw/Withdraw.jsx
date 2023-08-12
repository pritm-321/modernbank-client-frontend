import './withdraw.css';
import React, { useEffect } from 'react'
import TopNavbar from "../../components/navbar/Navbar";
import { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { moneyWithdraw } from '../../actions/userTransactionActions';
import { useHistory } from 'react-router-dom';

const Withdraw = () => {
  const {id}=useParams()
  const [amount, setAmount] = useState('');
  const history=useHistory()

  const dispatch =useDispatch()

  const withdrawMoney = useSelector((state) => state.moneyWithdraw);
  const {loading,error,success}=withdrawMoney;

  const submitHandler=(e)=>{
    e.preventDefault();
    if(!amount) return;
    dispatch(moneyWithdraw(id,amount))
    history.push(`/withdrawapprove/${id}`)
  }

  // useEffect(()=>{
  //   console.log("success",success);
  // },[success])


  return (
    <>
    <TopNavbar />
    <div className="body-ofwithdraw">
     <div className="container-ofwithdraw">
        <form onSubmit={submitHandler}>
            <div className="title-ofwithdraw">Withdraw Your Money</div>
            <br/>
            <div className="input-box-ofwithdraw">
              <input
                type="number"
                name="withdrawAmount"
                id="withdrawAmount"
                placeholder="Enter your withdraw amount"
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <br/>
            <div className="button input-box-ofwithdraw" id='withdraw-buttons'>
            <button className="button" type="submit" id="withdrawCancelbutton" onClick={()=> history.goBack()}>Cancel</button>
              <button className="button" type="submit" id="withdrawAmtbutton">Proceed</button>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Withdraw
