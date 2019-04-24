import axios from "axios";

const groupsApi = {
  postGroup: payload => axios.post(`/groups`, payload, { withCredentials: true }),
  getGroup: ({ id }) => axios.get(`/groups/${id}`, { withCredentials: true })
};

export default groupsApi;
