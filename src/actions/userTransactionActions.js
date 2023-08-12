import axios from "axios";
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
import Swal from "sweetalert2";

export const getAccountBalance = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BALANCE_FETCH_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `https://banking-backend-zynj.onrender.com/api/v1/admin/getBalanceByAid`,
      { aid: id },
      config
    );
    console.log(data);
    dispatch({
      type: BALANCE_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BALANCE_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const moneyTransfer = (id, account, amount) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: MONEY_TRANSFER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    console.log(config);
    const { data } = await axios.post(
      `https://banking-backend-zynj.onrender.com/api/v1/customer/transferToAccount`,
      {
        senderaid: id,
        receiveraid: account,
        amount: amount,
      },
      config
    );
    console.log(data);
    dispatch({
      type: MONEY_TRANSFER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MONEY_TRANSFER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.message,
      showConfirmButton: false,
      timer: 2500,
    });
  }
};

export const moneyWithdraw = (id, amount) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MONEY_WITHDRAW_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `https://banking-backend-zynj.onrender.com/api/v1/customer/withdraw`,
      {
        aid: id,
        amount: amount,
      },
      config
    );
    console.log(data);
    dispatch({
      type: MONEY_WITHDRAW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MONEY_WITHDRAW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.message,
      showConfirmButton: false,
      timer: 2500,
    });
  }
};

export const moneyDepositACtion = (id, amount) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: MONEY_DEPOSIT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `https://banking-backend-zynj.onrender.com/api/v1/customer/deposit`,
      {
        aid: id,
        amount: amount,
      },
      config
    );
    console.log(data);
    dispatch({
      type: MONEY_DEPOSIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MONEY_DEPOSIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.message,
      showConfirmButton: false,
      timer: 2500,
    });
  }
};
