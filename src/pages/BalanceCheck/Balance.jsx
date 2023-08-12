import "./balance.css";
import React from "react";
import TopNavbar from "../../components/navbar/Navbar";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAccountBalance } from "../../actions/userTransactionActions";
import Loading from "../../components/Loading";

const Balance = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const accountBalance = useSelector((state) => state.accountBalance);
  const { loading, error, balance } = accountBalance;

  useEffect(() => {
    dispatch(getAccountBalance(id));
  }, [dispatch, id]);
  return (
    <>
      <TopNavbar />
      {loading ? (
        <Loading loadtext='Fetching Your Account Balance...' />
      ) : (
        <div className="balance-page">
          <body className="bodyofbalancecheck">
            <div className="balance-check-center">
              <h3>Your current balance is:</h3>
              <br />
              {console.log(balance)}
              <h1 className="accountbalance">&#8377; {balance}</h1>
              <br />
              <br />
              <Link to={`/useraccount/${id}`}>
                <button className="returnbacktohomebutton" type="submit">
                  &larr; Return to home
                </button>
              </Link>
            </div>
          </body>
        </div>
      )}
    </>
  );
};

export default Balance;
