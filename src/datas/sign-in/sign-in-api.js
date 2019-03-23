import axios from "axios";

const signInApi = {
  signIn: payload =>
    axios.post(`https://api.curb-app.com/accounts/sign-in`, payload),
  signOut: token =>
    axios.post(
      `https://api.curb-app.com/accounts/sign-out`,
      undefined,
      { headers: { Authorization: `Bearer ${token}` } }
    )
};

export default signInApi;
