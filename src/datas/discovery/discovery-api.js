import axios from "axios";

const discoveryApi = {
  getDiscoveryGlobalSectionGroupsId: ({ page, count }) =>
    axios.get(`/groups/list-global?page=${page}&count=${count}`),
  getDiscoveryCustomSectionGroupsId: ({ page, count }) =>
    axios.get(`/groups/list-custom?page=${page}&count=${count}`),
  getDiscoveryRandomSectionGroupsId: ({ page, count }) =>
    axios.get(`/groups/list-random?page=${page}&count=${count}`)
};

export default discoveryApi;
