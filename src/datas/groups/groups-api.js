import axios from "axios";

const groupsApi = {
  postGroup: payload => axios.post(`/groups`, payload),
  getGroup: ({ id }) => axios.get(`/groups/${id}`),
  patchGroup: ({ id, ...others }) => axios.patch(`/groups/${id}`, others),
  deleteGroup: ({ id }) => axios.delete(`/groups/${id}`),
  getGroups: ({ ids }) => axios.get(`/groups/list?groupIds=${JSON.stringify(ids)}`),
  postGroupInviteToken: ({ id, ...others }) => axios.post(`/groups/join/${id}`, others),
  getGroupInviteToken: ({ id }) => axios.get(`/groups/invite/${id}`)
};

export default groupsApi;
