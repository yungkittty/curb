import axios from "axios";

const groupsApi = {
  getGroup: ({ id }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/groups/${id}`),
  getGroups: () => ({
    // !
    groups: [
      { id: "something-1" },
      { id: "something-2" },
      { id: "something-3" },
      { id: "something-4" },
      { id: "something-5" }
    ]
  })
};

export default groupsApi;
