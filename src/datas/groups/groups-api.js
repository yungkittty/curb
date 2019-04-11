import axios from "axios";

const groupsApi = {
  getGroup: ({ id }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/groups/${id}`),
  getGroupInviteToken: ({ id }) => ({ token: id })
  //axios.get(`${process.env.REACT_APP_API_URL}/groups/invite/${id}`)
};

export default groupsApi;
