import axios from "axios";

const groupsApi = {
  getGroup: ({ id }) => axios.get(`/groups/${id}`, { withCredentials: true })
};

export default groupsApi;
