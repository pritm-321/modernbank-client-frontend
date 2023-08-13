import "./register.css";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "../../actions/userActions";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Register = () => {
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo, success } = userRegister;
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const submitHandler = (e) => {
    e.preventDefault();
    // if (password !== password2) {
    //   alert("Passwords do not match");
    // } else {
      const userName=user.nickname
      console.log(user)
      const email=user.email
      console.log(email)
      try {
        dispatch(
          register(
            userName,
            firstName,
            lastName,
            phone,
            email,
            aadhar,
            street,
            city,
            state,
            pincode,
            
          )
        );
        Swal.fire({
          title: "Success!",
          text: "Account Created Successfully",
          icon: "success",
          confirmButtonText: "Proceed to Login",
        });
        history.push("/homepage");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Account Creation Failed",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    // }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/");
    }
  }, [userInfo]);

  return (
    <>
      <div className="register-wrapper">
        <div className="register-bankname">Modern Bank</div>
        <div className="register-form">
          <div className="register-title">Registration Form</div>
          <hr />
          <br />
          <form onSubmit={submitHandler}>
            <div className="register-inputfield">
              <label className="register-name">Name</label>
              <input
                type="text"
                className="register-fname"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              {/* <input
              type="text"
              className="register-fname"
              placeholder="First Name"
                onChange={(e)=>setFirstName(e.target.value)}
             
            /> */}
              <input
                type="text"
                className="register-lname"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            {/* <div className="register-inputfield">
              <label className="register-phone">E-Mail</label>
              <input
                type="email"
                className="register-phoneinput"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div> */}
            <div className="register-inputfield">
              <label className="register-phone">Phone</label>
              <input
                type="number"
                className="register-phoneinput"
                placeholder="### ### ####"
                onChange={(e) => setPhone(e.target.value)}
                maxLength="10"
                required
              />
            </div>
            <div className="register-inputfield">
              <label className="register-aadhar">Aadhar Number </label>
              <input
                type="number"
                className="register-aadharinput"
                placeholder="XXXX XXXX XXXX"
                onChange={(e) => setAadhar(e.target.value)}
                required
              />
            </div>
            <div className="register-inputfield">
              <label className="register-stname">Street Name</label>
              <input
                type="text"
                className="register-stnameinput"
                onChange={(e) => setStreet(e.target.value)}
                required
              />
            </div>
            <div className="register-inputfield">
              <label className="register-cityname">City Name</label>
              <input
                type="text"
                className="register-citynameinput"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="register-inputfield">
              <label className="register-pin">Pin Code</label>
              <input
                type="number"
                className="register-pininput"
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>

            <div className="register-inputfield">
              <label className="register-state">State</label>
              <input
                type="text"
                className="register-stateinput"
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            {/* <div className="register-inputfield">
            <label className="register-email">Email</label>
            <input type="email" className="register-emailinput" required />
          </div> */}
            {/* <div className="register-inputfield">
            <label className="register-userid">Username</label>
            <input type="text" 
            className="register-usernameinput"
                onChange={(e)=>setUsername(e.target.value)}
             required />
          </div> */}
            {/* <div className="register-inputfield">
              <label className="register-password">Password</label>
              <input
                type="password"
                className="register-passwordinput"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="register-inputfield">
              <label className="register-retypepassword">
                Confirm Password
              </label>
              <input
                type="password"
                className="register-retypepasswordinput"
                placeholder="********"
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div> */}
            <div className="register-inputfieldsubmit">
              <button type="submit" className="register-submit" value="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
