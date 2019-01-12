import axios from "axios";

const groupsApi = {
  postGroup: () => axios.post(`${process.env.REACT_APP_API_URL}/groups`),
  getGroup: ({ id }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/groups/${id}`)
};

export default groupsApi;
