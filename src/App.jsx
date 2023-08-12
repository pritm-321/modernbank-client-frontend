import './App.css';
// import TopNavbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Balance from './pages/BalanceCheck/Balance';
import Transaction from './pages/Transaction/Transaction';
import Withdraw from './pages/Withdraw/Withdraw';
import TransactionSuccessful from './pages/transactionSuccessful/TransactionSuccessful';
import TransactionUnsuccessful from './pages/transactionUnsuccessful/TransactionUnsuccessful';
import LoginPage from './pages/loginPage/LoginPage';
import DepositAmount from './pages/depositAmountPage/DepositAmount';
import Homepageinner from './pages/Homepage_inner';
import Register from './pages/register/Register';
import UserProfile from './pages/userProfile/UserProfile';
import TransactionStatus from './pages/transactionStatus/TransactionStatus';
import WithdrawApproval from './pages/WithdrawApprovalPage/WithdrawApproval';
import DepositApproval from './pages/DepositApprovalPage/DepositApproval';
import Passbook from './pages/passbook/Pasbook';
import CreateAccount from './pages/createaccount/CreateAccount';

function App() {
  return (
   <Router>
    <Switch>
      <Route  path="/homepage"><Homepage/></Route>
      <Route path="/newuser"><Register/></Route>
      <Route path='/useraccount/:id'><Homepageinner/></Route>
      <Route path="/createaccount/:id"><CreateAccount/></Route>
      <Route path="/balancecheck/:id"><Balance/></Route>
      <Route path="/profile"><UserProfile/></Route>
      <Route path="/transaction/:id"><Transaction/></Route>
      <Route path="/depositamount/:id"><DepositAmount/></Route>
      <Route path="/withdraw/:id"><Withdraw/></Route>
      <Route path="/transactionsuccess/:id"><TransactionSuccessful/></Route>
      <Route path="/transactionunsuccessful/:id"><TransactionUnsuccessful/></Route>
      <Route path="/transactionstatus/:id"><TransactionStatus/></Route>
      <Route path="/withdrawapprove/:id"><WithdrawApproval/></Route>
      <Route path="/depositapprove/:id"><DepositApproval/></Route>
      <Route path="/displaypassbook/:id"><Passbook/></Route>
      <Route  path="/register"><Register/></Route> 
      <Route exact path="/"><LoginPage/></Route> 
    </Switch>
   </Router>
  );
}

export default App;
