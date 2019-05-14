import axios from "axios";

const mediasApi = {
  getMedia: ({ id }) => axios.get(`/contents/${id}`),
  postMediaAvatarUser: ({ id, avatar, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", avatar.file);
    return axios.post(`/contents/avatars/users/${id}`, data, { onUploadProgress });
  },
  postMediaAvatarGroup: ({ id, avatar, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", avatar.file);
    return axios.post(`/contents/avatars/groups/${id}`, data, { onUploadProgress });
  }
};

export default mediasApi;
