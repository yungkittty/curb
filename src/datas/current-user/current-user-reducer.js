import _ from "lodash";
import signInActionsTypes from "../sign-in/sign-in-actions-types";

const initialState = {
  id: "5c925a559e9864001ceb8cc5",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InR5cGUiOiJ0b2tlbiIsImlkIjoiNWM5MjVhNTU5ZTk4NjQwMDFjZWI4Y2M1In0sImlhdCI6MTU1MzA5NTMxNCwiZXhwIjoxNTUzMTAyNTE0fQ.7OMO-OWAi9ToUYvAFYl9YlMxdMPpvqFI7mbFVQLkePw",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InR5cGUiOiJyZWZyZXNoVG9rZW4iLCJpZCI6IjVjOTI1YTU1OWU5ODY0MDAxY2ViOGNjNSJ9LCJpYXQiOjE1NTMwOTUzMTQsImV4cCI6MTU1MzQ0MDkxNH0.rEkTxxHAWykQIPSPK3zb5jjHB4D1NtMiDslGoYpPXpw"
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case signInActionsTypes.SIGN_IN_SUCCESS:
      return _.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default currentUserReducer;
