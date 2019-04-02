import axios from "axios";

const usersApi = {
  getUser: ({ id }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`),
  sendEmail: ({ email }) =>
    axios.post(`${process.env.REACT_APP_API_URL}/emailing/verification`, {
      email
    })
};

export default usersApi;
