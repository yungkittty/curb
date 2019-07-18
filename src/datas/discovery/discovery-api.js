import axios from "axios";

const discoveryApi = {
  getDiscoveryGlobalSectionGroups: ({ page, count }) =>
    axios.get(`/groups/list-global?page=${page}&count=${count}`),
  getDiscoveryCustomSectionGroups: ({ page, count }) =>
    axios.get(`/groups/list-custom?page=${page}&count=${count}`),
  getDiscoveryRandomSectionGroups: ({ page, count }) =>
    axios.get(`/groups/list-random?page=${page}&count=${count}`)
};

export default discoveryApi;
