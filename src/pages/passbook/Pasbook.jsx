import React from "react";
import TopNavbar from "../../components/navbar/Navbar";
import Table from "react-bootstrap/Table";
import "./passbook.css";
import { userAccountPassbook } from "../../actions/userAccountPassbookActions";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import Loading from "../../components/Loading";

const Button = styled.div`
  text-align: center;
  margin-top: 80px;
  border-radius: 15px;
`;

const Debit = styled.div`
  color: red;
`;

const Passbook = () => {
  const { id } = useParams();

  const history = useHistory();
  const dispatch = useDispatch();

  const passbookData = useSelector((state) => state.userAccountPassbook);
  const { loading, error, passbook } = passbookData;

  useEffect(() => {
    dispatch(userAccountPassbook(id));
  }, [dispatch, id]);

  return (
    <>
      <TopNavbar />
      {loading ? (
        <Loading loadtext="Fetching PassBook Data..." />
      ) : (
        <div className="passbook-container">
          <div className="passbook-heading">
            <p>Transaction Details</p>
          </div>
          <Table striped bordered>
            <thead className="passbook-thead">
              <tr className="passbook-header" style={{ textAlign: "center" }}>
                <th rowSpan={2}>Date and Time</th>
                <th rowSpan={2}>Transaction ID</th>
                <th colSpan={1}>Sender</th>
                <th colSpan={1}>Receiver</th>
                
                <th rowSpan={2}>Amount</th>
                <th rowSpan={2}>ModulatorID</th>
                <th rowSpan={2}>Topic</th>
                <th rowSpan={2}>Status</th>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <th>Account Number</th>
                {/* <th>Account Type</th> */}
                <th>Account Number</th>
                {/* <th>Account Type</th> */}
              </tr>
            </thead>
            <tbody>
              {passbook?.map((transaction) => (
                <tr
                  style={{ textAlign: "center" }}
                  key={transaction.tid}
                >
                  <td>{transaction.createdAt}</td>
                  <td>{transaction.tid}</td>
                  <td>{transaction.senderaid}</td>
                  {/* <td>{transaction.senderaid}</td> */}
                  <td>{transaction.receiveraid}</td>
                  {/* <td>{transaction.receiveraid}</td> */}
                  <td>
                   
                    {id === transaction.senderaid ? (
                      <div>
                        <div style={{color: 'red', backgroundColor: 'rgba(255, 0, 0, 0.158)'}}>{transaction.amount}</div>
                      </div>
                    ) : (
                      <div style ={{color:'green', backgroundColor : 'rgba(0, 128, 0, 0.329)'}}>{transaction.amount}</div>
                    )}
                  </td>
                  <td>{transaction.modulatoreid}</td>
                  <td>
                      {transaction?.topic}
                    </td>
                  <td>{transaction?.status === true ? (<>Successful 🟢</>) : (<>Unsuccessful🔴</>)}</td>
                </tr>
                
              ))}
              {/* <tr style={{ textAlign: "center" }}>
                <td>2022-11-27</td>
                <td>1</td>
                <td>2</td>
                <td>Savings Account</td>
                <td>5</td>
                <td>Savings Account</td>
                <td>10</td>
                <td>2010</td>
            </tr>
            <tr style={{ textAlign: "center" }}>
            <td>2022-11-27</td>
                <td>2</td>
                <td>2</td>
                <td>Savings Account</td>
                <td>4</td>
                <td>Current Account</td>
                <td>10</td>
                <td>3010</td>
            </tr> */}
            </tbody>
          </Table>
          <Button>
            <button
              className="button1"
              type="submit"
              onClick={() => history.push(`/useraccount/${id}`)}
            >
              Return to Dashboard
            </button>
          </Button>
        </div>
      )}
    </>
  );
};

export default Passbook;
