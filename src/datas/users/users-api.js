import axios from "axios";

const usersApi = {
  getUser: ({ id }) =>
    axios.get(`https://api.curb-app.com/users/${id}`),
  patchUser: ({ id, payload, token }) =>
    axios.patch(`https://api.curb-app.com/users/${id}`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    }),
  postUserAvatar: ({ id, payload, token }) =>
    axios.post(
      `https://api.curb-app.com/contents/avatar/users/${id}`,
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
