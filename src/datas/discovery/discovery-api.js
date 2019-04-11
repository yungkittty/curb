import axios from "axios";

const discoveryApi = {
  getDiscovery: ({ count }) => axios.get(`/groups?count=${count}`)
};

export default discoveryApi;
