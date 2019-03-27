import axios from "axios";

const accountApi = {
  emailResetPass: payload =>
    axios.post(`${process.env.REACT_APP_API_URL}/emailing/reset`, payload),
  validateCode: payload =>
    axios.post(
      `${process.env.REACT_APP_API_URL}/accounts/validate-code-password`,
      payload
    ),
  resetPass: payload =>
    axios.post(
      `${process.env.REACT_APP_API_URL}/accounts/reset-password`,
      payload
    )
};

export default accountApi;
