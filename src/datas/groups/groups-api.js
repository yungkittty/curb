import axios from "axios";

const groupsApi = {
  getGroup: ({ id }) => axios.get(`/groups/${id}`)
};

export default groupsApi;
