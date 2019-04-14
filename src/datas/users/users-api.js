import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`)
};

export default usersApi;
