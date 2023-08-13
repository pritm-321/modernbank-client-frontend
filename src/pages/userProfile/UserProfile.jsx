import "./userProfile.css";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import userimg from "./user.png";
import Table from "react-bootstrap/Table";
import TopNavbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listUserAccounts } from "../../actions/userAccountActions";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userAccounts = useSelector((state) => state.userAccounts);
  const { loading, error, accounts } = userAccounts;

  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  let userData = "";
  const userstoredData = localStorage.getItem("user");
  if (userstoredData) {
    userData = JSON.parse(userstoredData);
    // Now you can use 'userData' as needed
  }
  useEffect(() => {
    if (isAuthenticated) {
      const id = user.nickname;
      dispatch(listUserAccounts(id));
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <TopNavbar />
      <div className="profile-container">
        <div className="profile-box">
          <div className="profile-info">
            <img src={user.picture} alt="" />
            <div className="profile-nameofuser">
              <p className="profile-name">{`${userData.firstName} ${userData.lastName}`}</p>
              <p className="profile-username"> UID : {userData.uid}</p>
            </div>
          </div>
          <div className="profile-userinfo">
            <div className="input-box">
              <i className="fa fa-phone"></i>
              <p className="profile-phone">{userData.phone}</p>
            </div>
            <div className="input-box">
              <i className="fa fa-hashtag"></i>
              <p className="profile-aadhar">{userData.aadharNo}</p>
            </div>
            <div className="input-box">
              <i className="fa fa-envelope"></i>
              <p className="profile-aadhar">{userData.email}</p>
            </div>
            <div className="input-box">
              <i className="fa fa-home"></i>
              <p className="profile-address">{`${userData.streetName} , ${userData.city} , ${userData.state}`}</p>
            </div>
          </div>
        </div>
        {accounts ? (
          <div className="profile-accounts">
            <section id="user-acc">
              <div className="useracc-container ">
                <div className="tab-design">
                  <table className="table table-bordered ">
                    <thead className="useracc-thead">
                      <tr style={{ textAlign: "center" }}>
                        <th scope="col">Account Number</th>
                        <th scope="col">Account Type</th>
                        <th scope="col">Account Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {accounts?.map((account) => (
                        <tr style={{ textAlign: "center" }}>
                          <td>{account.aid}</td>
                          <td>{account.atypeid}</td>
                          <td>
                            {account.status === true ? (
                              <>🟢Active</>
                            ) : (
                              <>🔴Inactive</>
                            )}
                          </td>
                          <Link to={`/useraccount/${account.accountNo}`}>
                            <td>Click here</td>
                          </Link>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <h2>"No Account Present"</h2>
        )}
      </div>
    </>
  );
};

export default UserProfile;
