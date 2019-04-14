import axios from "axios";

const signUpApi = {
  signUp: payload => axios.post("/accounts/sign-up", payload, { withCredentials: true }),
  deleteAccount: ({ id }) => axios.delete(`/accounts/${id}`, { withCredentials: true })
};

export default signUpApi;
