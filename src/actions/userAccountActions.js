import axios from "axios";
import {
  USER_ACCOUNTS_FAIL,
  USER_ACCOUNTS_REQUEST,
  USER_ACCOUNTS_SUCCESS,
  USER_ACCOUNT_CREATE_FAIL,
  USER_ACCOUNT_CREATE_REQUEST,
  USER_ACCOUNT_CREATE_SUCCESS,
} from "../constants/userAccountsConstants";

import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";

export const listUserAccounts = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_ACCOUNTS_REQUEST,
    });

    //const {
//     userLogin: { userInfo },
//    } = getState();

    const config = {
      headers: {
        //Authorization: `Bearer ${userInfo.token}`,
      },
    };

    
    const { data } = await axios.post(
      `https://modernbank-backend.onrender.com/api/v1/admin/getAllAccountsByUid`,
      { uid:id },
      config
    );
    console.log(data);

    dispatch({
      type: USER_ACCOUNTS_SUCCESS,
      payload: data,
    });

    // Swal.fire({
    //     icon: "success",
    //     title: "Success",
    //     text: "Accounts fetched successfully",
    //     });
  } catch (error) {
    dispatch({
      type: USER_ACCOUNTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        });
  }
};

export const createUserAccount = (id, type, bal, nominee) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: USER_ACCOUNT_CREATE_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        // //Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const acdetails = {
      uid: id,
      atypeid: type,
      balance: bal,
      nominee: nominee,
    };
    console.log(acdetails);
    const { data } = await axios.post(
      `https://modernbank-backend.onrender.com/api/v1/customer/registerAccount`,
      acdetails,
      config
    );
    console.log(data);

    dispatch({
      type: USER_ACCOUNT_CREATE_SUCCESS,
      payload: data,
    });

    Swal.fire({
        icon: "success",
        title: "Success",
        text: "Account created successfully",
        });
  } catch (error) {
    dispatch({
      type: USER_ACCOUNT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        });
  }
};
