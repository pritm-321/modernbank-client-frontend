import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";
import Swal from "sweetalert2";

export const login = (uid, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `https://modernbank-backend.onrender.com/api/v1/customer/loginCustomer`,
      { uid, password } , config
    );
    console.log(data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    sessionStorage.setItem("userInfo", JSON.stringify(data));

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login Successful",
      showConfirmButton: false,
      timer: 2500,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    Swal.fire ({
      position : "center",
      icon : "error",
      title : "Invalid Credentials",
      showConfirmButton : false,
      timer : 2500,

    })
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const register = (
  
  userName,
  firstName,
  lastName,
  phone,
  email,
  aadharNo,
  streetName,
  city,
  state,
  pincode
) => async (dispatch) => {
  let postdata = {
   
    username: userName,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    aadharNo: aadharNo,
      streetName: streetName,
      city: city,
      state: state,
      pinCode: pincode,
      middleName:""
   
  };
  console.log(postdata);
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(postdata)
    const { data } = await axios.post(
      `https://modernbank-backend.onrender.com/api/v1/customer/registerCustomer`, postdata,config
    );
    console.log(data);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
