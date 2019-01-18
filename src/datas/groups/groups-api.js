import axios from "axios";

const groupsApi = {
  postGroup: payload =>
    axios.post(`${process.env.REACT_APP_API_URL}/groups`, payload),
  getGroup: ({ id }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/groups/${id}`)
};

export default groupsApi;
