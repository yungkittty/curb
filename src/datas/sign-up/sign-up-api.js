import axios from "axios";

const signUpApi = {
  signUp: payload =>
    axios.post(`${process.env.REACT_APP_API_URL}/accounts/sign-up`, {
      data: payload
    }),
  deleteAccount: ({ id, token }) =>
    axios.delete(
      `${process.env.REACT_APP_API_URL}/accounts/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
};

export default signUpApi;
