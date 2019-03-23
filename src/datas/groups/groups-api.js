import axios from "axios";

const groupsApi = {
  getGroup: ({ id }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/groups/${id}`)
};

export default groupsApi;
