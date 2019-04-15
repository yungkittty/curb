import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`, { withCredentials: true })
};

export default usersApi;
