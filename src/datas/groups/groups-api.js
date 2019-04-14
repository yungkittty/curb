import axios from "axios";

const groupsApi = {
  getGroup: ({ id }) => axios.get(`/groups/${id}`, undefined, { withCredentials: true }),
  getGroupInviteToken: ({ id }) => axios.get(`/groups/invite/${id}`, undefined, { withCredentials: true })
};

export default groupsApi;
