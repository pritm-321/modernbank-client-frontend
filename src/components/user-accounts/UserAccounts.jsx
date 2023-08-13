import React, { useEffect } from "react";
import "./useracc.css";
import DonotHaveAnyAccount from "../../pages/DonotHaveAnyAccount/DonotHaveAnyAccount";
// import { accounts } from "./data";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { listUserAccounts } from "../../actions/userAccountActions";
import { useAuth0 } from "@auth0/auth0-react";

const UserAccounts = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const userAccounts = useSelector((state) => state.userAccounts);
  const { loading, error, accounts } = userAccounts;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  const accountCreate = useSelector((state) => state.userAccountCreate);
  const { success: acCreateSuccess } = accountCreate;
  const { user, isAuthenticated, isLoading,logout } = useAuth0();

  useEffect(() => {
    dispatch(listUserAccounts(user.nickname));
    // if (!userInfo) {
    //   history.push("/");
    // }
    if(!isAuthenticated){
      // console.log(user);
      history.push('/homepage')
    }
  }, [dispatch, history,  acCreateSuccess]);

  return (
    <div>
      {accounts ? (
        <section id="user-acc">
          <div className="useracc-container container">
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

                      <td>
                        {account.status === true ? (
                          <Link to={`/useraccount/${account.aid}`}>
                            Click here
                          </Link>
                        ) : (
                          <>Unavailable</>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : (
        <DonotHaveAnyAccount />
      )}
    </div>
  );
};

export default UserAccounts;
