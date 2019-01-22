import axios from "axios";

const groupsApi = {
  postGroup: ({ payload, token }) =>
    axios.post(`${process.env.REACT_APP_API_URL}/groups`, payload, {
      headers: { Authorization: `Bearer ${token}` }
    }),
  getGroup: ({ id }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/groups/${id}`)
};

export default groupsApi;
