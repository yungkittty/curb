import axios from "axios";

const groupsApi = {
  getGroup: ({ id }) =>
    axios.get(`https://api.curb-app.com/groups/${id}`)
};

export default groupsApi;
