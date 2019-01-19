import axios from "axios";

const signUpApi = {
  signUp: payload =>
    axios.post(`${process.env.REACT_APP_API_URL}/accounts/sign-up`, {
      data: payload
    }),
  deleteAccount: (token, { id }) =>
    axios.delete(`${process.env.REACT_APP_API_URL}/accounts/${id}`, undefined, {
      headers: { Authorization: `Bearer ${token}` }
    })
};

export default signUpApi;
