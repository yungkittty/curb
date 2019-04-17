import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`, { withCredentials: true }),
  patchUser: ({ id, payload, token }) =>
    axios.patch(`${process.env.REACT_APP_API_URL}/users/${id}`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    }),
  postUserAvatar: ({ id, payload }) => {
    const data = new FormData();
    data.append("file", payload.avatar);
    axios.post(`/contents/avatars/users/${payload.id || id}`, data, { withCredentials: true });
  }
};

export default usersApi;
