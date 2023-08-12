import {
  USER_ACCOUNTS_FAIL,
  USER_ACCOUNTS_REQUEST,
  USER_ACCOUNTS_SUCCESS,
  USER_ACCOUNT_CREATE_FAIL,
  USER_ACCOUNT_CREATE_REQUEST,
  USER_ACCOUNT_CREATE_SUCCESS,
} from "../constants/userAccountsConstants";

export const userAccountsReducer = (state = { accounts: [] }, action) => {
  switch (action.type) {
    case USER_ACCOUNTS_REQUEST:
      return { loading: true };
    case USER_ACCOUNTS_SUCCESS:
      return { loading: false, accounts: action.payload };
    case USER_ACCOUNTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userAccountCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ACCOUNT_CREATE_REQUEST:
      return { loading: true };
    case USER_ACCOUNT_CREATE_SUCCESS:
      return { loading: false, success: true, account: action.payload };
    case USER_ACCOUNT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
