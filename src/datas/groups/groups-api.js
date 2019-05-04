import axios from "axios";

const groupsApi = {
  postGroup: payload => axios.post(`/groups`, payload),
  getGroup: ({ id }) => axios.get(`/groups/${id}`),
  getGroupInviteToken: ({ id }) => axios.get(`/groups/invite/${id}`)
};

export default groupsApi;
