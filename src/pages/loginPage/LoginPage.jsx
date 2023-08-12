import "./loginPage.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import loginimg from "./login.jpeg"
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const { user, isAuthenticated, isLoading,logout } = useAuth0();

const history=useHistory();
  useEffect(()=>{
    async function checkUser(){
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const userName=user.nickname
      const { data } = await axios.post(
        `https://modernbank-backend.onrender.com/api/v1/customer/getCustomerByUid`,
        {uid:userName} , config
      );
      console.log(data)
      if(data.message ==="No such customer exist with this uid"){
        history.push('/register')
      }
      else
      {
        history.push('/homepage')
      }
    }
    if(isAuthenticated){
        checkUser()
      // history.push('/homepage')
    }
  },[history,user, error])


  const submitHandler= async (e) => {
    e.preventDefault()
    console.log(username,password);

    dispatch(login(username, password))
    
   }
  

   
   const { loginWithRedirect } = useAuth0();


  return (
   <div>
    {loading ? 
    (<Loading loadtext='Processing Your Request....' />) 
  :
  (
    <>
    <div className="wrapper1">
      <div className="loginx-container">
      <div className="login-container">
        <img src={loginimg}alt="" />
        
        </div>
        {
          isAuthenticated ? (
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
          ):(<button onClick={() => loginWithRedirect()}>Log In</button>)
        }
        
      {/* <form className="form1" onSubmit={submitHandler}>
        <div className="title1">Login</div>
        <div className="inputfield">
          <label className="login-userid">User Id</label>
          <input
            type="text"
            className="input"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="inputfield">
          <label className="login-password">Password</label>
          <input
           type="password"
            className="input" 
            onChange={(e) => setPassword(e.target.value)}
            required 
            />
        </div>
        <div className="inputfield">
          <button type="submit" value="Submit" className="btn" >Submit</button>
        </div>
        <hr />
        <div className="login-reg">
          <p>Do not have an account?</p>
          <button><Link to='/register'>Register</Link></button>
        </div>
      </form> */}
      </div>
    </div>
  </>
  )}
   </div>
  );
}

export default LoginPage;
