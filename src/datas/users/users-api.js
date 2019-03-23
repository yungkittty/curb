import axios from "axios";

const usersApi = {
  getUser: ({ id }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`),
  patchUser: ({ id, payload, token }) =>
    axios.patch(`${process.env.REACT_APP_API_URL}/users/${id}`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    }),
  postUserAvatar: ({ id, payload, token }) =>
    axios.post(
      `${process.env.REACT_APP_API_URL}/contents/avatar/users/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    )
};

export default usersApi;
