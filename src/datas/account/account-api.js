import axios from "axios";

const accountApi = {
  emailResetPass: payload => axios.post(`/emailing/reset`, payload),
  validateCode: payload => axios.post(`/accounts/validate-code-password`, payload),
  resetPass: payload => axios.post(`/accounts/reset-password`, payload)
};

export default accountApi;
