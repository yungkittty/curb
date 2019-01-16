import axios from "axios";

const signInApi = {
  signIn: payload =>
    axios.post(`${process.env.REACT_APP_API_URL}/accounts/sign-in`, {
      ...payload
    }),
  signOut: token =>
    axios.post(`${process.env.REACT_APP_API_URL}/accounts/sign-out`, null, {
      headers: { Authorization: `Bearer ${token}` }
    })
};

export default signInApi;
