import axios from "axios";

const groupsApi = {
  postGroup: payload => axios.post(`/groups`, payload, { withCredentials: true }),
  deleteGroup: ({ id }) => axios.delete(`/groups/${id}`, { withCredentials: true }),
  patchGroup: ({ id, ...others }) => axios.patch(`/groups/${id}`, others, { withCredentials: true }),
  getGroup: ({ id }) => axios.get(`/groups/${id}`, { withCredentials: true }),
  getGroupInviteToken: ({ id }) => axios.get(`/groups/invite/${id}`, { withCredentials: true })
};

export default groupsApi;
