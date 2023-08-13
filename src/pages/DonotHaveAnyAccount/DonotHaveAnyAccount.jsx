import React from "react";
import "./donotHaveAnyAccount.css";
import IMG from "./createacc.jpg";

function DonotHaveAnyAccount() {
  return (
    <div className="doNotHaveAccount">
      <h1 className="messageToUser">You Don't Have any account.</h1>
      <img src={IMG} alt="" className="createAccimg" />

      {/* <button type="submit" className="createbtn">
        Creat Account
      </button> */}
    </div>
  );
}

export default DonotHaveAnyAccount;
