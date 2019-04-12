import axios from "axios";

const groupsApi = {
  postGroup: ({ payload }) =>
    axios.post(`${process.env.REACT_APP_API_URL}/groups`, payload, { withCredentials: true }),
  getGroup: ({ id }) => axios.get(`/groups/${id}`)
};

export default groupsApi;
