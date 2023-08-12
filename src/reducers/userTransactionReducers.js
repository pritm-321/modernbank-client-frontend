import {
  BALANCE_FETCH_FAIL,
  BALANCE_FETCH_REQUEST,
  BALANCE_FETCH_SUCCESS,
  MONEY_DEPOSIT_FAIL,
  MONEY_DEPOSIT_REQUEST,
  MONEY_DEPOSIT_SUCCESS,
  MONEY_TRANSFER_FAIL,
  MONEY_TRANSFER_REQUEST,
  MONEY_TRANSFER_SUCCESS,
  MONEY_WITHDRAW_FAIL,
  MONEY_WITHDRAW_REQUEST,
  MONEY_WITHDRAW_SUCCESS,
} from "../constants/userTransactionConstants";

export const balanceFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case BALANCE_FETCH_REQUEST:
      return { loading: true };
    case BALANCE_FETCH_SUCCESS:
      return { loading: false, balance: action.payload };
    case BALANCE_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const moneyTransferReducer = (state = {}, action) => {
  switch (action.type) {
    case MONEY_TRANSFER_REQUEST:
      return { loading: true };
    case MONEY_TRANSFER_SUCCESS:
      return { loading: false, success: true };
    case MONEY_TRANSFER_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const moneyWithdrawReducer = (state = {}, action) => {
  switch (action.type) {
    case MONEY_WITHDRAW_REQUEST:
      return { loading: true };
    case MONEY_WITHDRAW_SUCCESS:
      return { loading: false, withdrawCode: action.payload, success: true };
    case MONEY_WITHDRAW_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};

export const moneyDepositReducer = (state = {}, action) => {
  switch (action.type) {
    case MONEY_DEPOSIT_REQUEST:
      return { loading: true };
    case MONEY_DEPOSIT_SUCCESS:
      return { loading: false, depositAmount: action.payload, success: true };
    case MONEY_DEPOSIT_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
