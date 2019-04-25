import axios from "axios";

const accountRecoveryApi = {
  postAccountRecoveryEmail: payload => axios.post(`/emailing/reset`, payload),
  postAccountRecoveryPasswordCode: payload => axios.post(`/accounts/validate-code-password`, payload),
  postAccountRecoveryPassword: payload => axios.post(`/accounts/reset-password`, payload)
};

export default accountRecoveryApi;
