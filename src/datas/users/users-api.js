import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`),
  patchUser: ({ id, payload }) => axios.patch(`/users/${id}`, payload) // ! payload
};

export default usersApi;
