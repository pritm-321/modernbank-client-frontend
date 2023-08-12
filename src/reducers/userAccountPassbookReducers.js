import {
  PASSBOOK_FETCH_FAIL,
  PASSBOOK_FETCH_REQUEST,
  PASSBOOK_FETCH_SUCCESS,
} from "../constants/userAccountPassbookConstants";

export const userAccountPassbookReducers = (
  state = { passbook: [] },
  action
) => {
  switch (action.type) {
    case PASSBOOK_FETCH_REQUEST:
      return { loading: true, passbook: [] };
    case PASSBOOK_FETCH_SUCCESS:
      return { loading: false, passbook: action.payload };
    case PASSBOOK_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
