import axios from "axios";

const signInApi = {
  signIn: payload => axios.post("/accounts/sign-in", payload),
  signOut: () => axios.post("/accounts/sign-out")
};

export default signInApi;
