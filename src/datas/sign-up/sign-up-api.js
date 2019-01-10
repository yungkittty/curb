import axios from "axios";

const signUpApi = {
  signUp: payload =>
    axios.post(`${process.env.REACT_APP_API_URL}/accounts/sign-up`, {
      data: payload
    })
};

export default signUpApi;
