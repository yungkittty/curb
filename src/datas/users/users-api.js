import axios from "axios";

const usersApi = {
  getUser: ({ id }) => axios.get(`/users/${id}`, { withCredentials: true }),
  patchUser: ({ id, payload }) => axios.patch(`/users/${id}`, payload, { withCredentials: true }),
  postUserAvatar: ({ id, payload }) => {
    const data = new FormData();
    data.append("file", payload.avatar);
    return axios.post(`/contents/avatars/users/${payload.id || id}`, data, { withCredentials: true });
  }
};

export default usersApi;
