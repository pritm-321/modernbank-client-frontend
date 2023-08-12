import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userAccountPassbookReducers } from "./reducers/userAccountPassbookReducers";
import { userAccountCreateReducer, userAccountsReducer } from "./reducers/userAccountsReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { balanceFetchReducer, moneyDepositReducer, moneyTransferReducer, moneyWithdrawReducer } from "./reducers/userTransactionReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userAccounts: userAccountsReducer,
  userAccountCreate: userAccountCreateReducer,
  accountBalance: balanceFetchReducer,
  moneyTransfer: moneyTransferReducer,
  moneyWithdraw: moneyWithdrawReducer,
  moneyDeposit: moneyDepositReducer,
  userAccountPassbook: userAccountPassbookReducers,
});

const userInfoFromStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
