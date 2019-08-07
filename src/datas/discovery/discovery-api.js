import axios from "axios";

const discoveryApi = {
  getDiscoverySections: ({ id }) => axios.get(`/groups/trending?userId=${id}&count=${25}`)
};

export default discoveryApi;
