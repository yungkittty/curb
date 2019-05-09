import axios from "axios";

const groupsApi = {
  postGroup: payload => axios.post(`/groups`, payload, { withCredentials: true }),
  getGroup: ({ id }) => axios.get(`/groups/${id}`, { withCredentials: true }),
  getGroupInviteToken: ({ id }) => axios.get(`/groups/invite/${id}`, { withCredentials: true })
};

export default groupsApi;
