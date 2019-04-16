import axios from "axios";

const signUpApi = {
  signUp: payload => axios.post("/accounts/sign-up", payload, { withCredentials: true })
};

export default signUpApi;
