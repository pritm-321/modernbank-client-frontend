import React from 'react'
import "./createaccount.css"
import TopNavbar from "../../components/navbar/Navbar";
import { useState } from 'react';
import { useParams,useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { createUserAccount } from '../../actions/userAccountActions';


const CreateAccount = () => {
   
    const history = useHistory()
    const [accountType, setAccountType] = useState("");
    const[bal, setBal] = useState("");
    const[nominee, setNominee] = useState("");

    const dispatch = useDispatch();
    const accountCreate= useSelector((state)=>state.userAccountCreate);
    const {loading,error,success}=accountCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(createUserAccount(userInfo.findUser.uid,accountType,bal,nominee));
        

        history.push(`/homepage`)
    }

    
  return (
    <>
    <TopNavbar />
    <div className="acc-wrapper">
    <div className="container">
        <div className="acc-container">
        <form onSubmit={submitHandler}>
            <div className="acc-title">
                Create your Account
            </div>
            <div className="acc-inputfield">
                <label className='acc-type'>Account Type</label>
                <select className="acc-select" onChange={(e)=>setAccountType(e.target.value)}>
                    <option selected>Choose account type</option>
                    <option value="Savings Account">Savings Account</option>
                    <option value="Public Provident Fund">Public Provident Fund</option>
                    <option value="Salary Account">Salary Account</option>
                    <option value="Current Account">Current Account</option>
                    <option value="Fixed Deposit">Fixed Deposit</option>
                </select>
            </div>
            <div className="acc-inputfield">
                <label className='acc-bal'>Starting Balance</label>
                <input type="number"
                 className='acc-balinput'
                  placeholder='0' 
                  onChange={(e)=>setBal(e.target.value)}
                  required/>
            </div>
            <div className="acc-inputfield">
                <label className='acc-nom'>Enter nominee name</label>
                <input type="text"
                 className='acc-nominput'
                 onChange={(e)=>setNominee(e.target.value)}
                  />
            </div>
            <div className="acc-inputfieldsubmit">
                <button type="submit" className="acc-submit" value="Submit">Submit</button>
            </div>
        </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default CreateAccount
