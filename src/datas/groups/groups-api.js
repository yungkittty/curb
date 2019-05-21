import axios from "axios";

const groupsApi = {
  postGroup: payload => axios.post(`/groups`, payload),
  getGroup: ({ id }) => axios.get(`/groups/${id}`),
  patchGroup: ({ id, ...others }) => axios.patch(`/groups/${id}`, others),
  deleteGroup: ({ id }) => axios.delete(`/groups/${id}`),
  postGroupInviteToken: ({ id, inviteToken: token }) => axios.post(`/groups/join/${id}`, { token }),
  getGroupInviteToken: ({ id }) => axios.get(`/groups/invite/${id}`)
};

export default groupsApi;
