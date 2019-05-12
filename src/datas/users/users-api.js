import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`, { withCredentials: true }),
  patchUser: ({ id, payload }) => axios.patch(`/users/${id}`, payload, { withCredentials: true })
};

export default usersApi;
