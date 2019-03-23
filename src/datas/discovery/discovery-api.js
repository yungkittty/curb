import axios from "axios";

const discoveryApi = {
  getDiscovery: ({ count }) =>
    axios.get(`https://api.curb-app.com/groups?count=${count}`)
};

export default discoveryApi;
