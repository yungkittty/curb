import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`),
  patchUser: ({ id, ...others }) => axios.patch(`/users/${id}`, others)
};

export default usersApi;
