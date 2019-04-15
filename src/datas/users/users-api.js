import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`),
  sendEmail: ({ email }) => axios.post(`/emailing/verification`, { email })
};

export default usersApi;
