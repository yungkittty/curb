import axios from "axios";

const signInApi = {
  signIn: payload => axios.post("/accounts/sign-in", payload, { withCredentials: true }),
  signOut: () => axios.post("/accounts/sign-out", { withCredentials: true })
};

export default signInApi;
