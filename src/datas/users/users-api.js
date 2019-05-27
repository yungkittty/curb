import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`, { withCredentials: true }),
  sendEmail: ({ email }) => axios.post(`/emailing/verification`, { email }),
  patchUser: ({ id, payload }) => axios.patch(`/users/${id}`, payload, { withCredentials: true })
};

export default usersApi;
