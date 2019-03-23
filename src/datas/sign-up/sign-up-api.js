import axios from "axios";

const signUpApi = {
  signUp: payload =>
    axios.post(`https://api.curb-app.com/accounts/sign-up`, payload)
};

export default signUpApi;
