import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`, undefined, { withCredentials: true })
};

export default usersApi;
