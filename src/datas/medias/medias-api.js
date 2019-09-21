import axios from "axios";

const mediasApi = {
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
