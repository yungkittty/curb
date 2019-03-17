import axios from "axios";

const discoveryApi = {
  getDiscovery: ({ count }) =>
    axios.get(`${process.env.REACT_APP_API_URL}/groups?count=${count}`)
};

export default discoveryApi;
