import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, users: payload, error: "" };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, users: [], error: payload };

    default:
      return state;
  }
};

export default userReducer;
