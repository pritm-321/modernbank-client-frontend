import axios from "axios";
import { PASSBOOK_FETCH_FAIL, PASSBOOK_FETCH_REQUEST, PASSBOOK_FETCH_SUCCESS } from "../constants/userAccountPassbookConstants";

export const userAccountPassbook= (accountNumber) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PASSBOOK_FETCH_REQUEST,
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
      `https://modernbank-backend.onrender.com/api/v1/admin/getAllTransactionByAid`,
      {
        "aid" : accountNumber
      }
    );
    console.log(data);

    dispatch({
      type: PASSBOOK_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PASSBOOK_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}