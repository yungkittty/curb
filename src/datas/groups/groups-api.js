import axios from "axios";

const groupsApi = {
  postGroup: payload => axios.post(`/groups`, payload, { withCredentials: true }),
  postGroupAvatar: ({ id, payload }) => {
    console.log(payload);
    const data = new FormData();
    data.append("file", payload.avatar);
    axios.post(`/contents/avatars/groups/${payload.id || id}`, data, { withCredentials: true });
  },
  getGroup: ({ id }) => axios.get(`/groups/${id}`, { withCredentials: true })
};

export default groupsApi;
