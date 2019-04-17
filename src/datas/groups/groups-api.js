import axios from "axios";

const groupsApi = {
  postGroup: payload => axios.post(`/groups`, payload, { withCredentials: true }),
  postGroupAvatar: ({ id, avatar }) => {
    const data = new FormData();
    data.append("file", avatar);
    axios.post(`/contents/avatars/groups/${id}`, data, { withCredentials: true });
  },
  getGroup: ({ id }) => axios.get(`/groups/${id}`, { withCredentials: true })
};

export default groupsApi;
