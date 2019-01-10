import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
};

export default usersApi;
