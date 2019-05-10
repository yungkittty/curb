import axios from "axios";

const mediasApi = {
  getMedia: ({ id }) => axios.get(`/contents/${id}`, { withCredentials: true }),
  postMediaAvatarUser: ({ id, avatar, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", avatar.value.file);
    return axios.post(`/contents/avatars/users/${id}`, data, {
      withCredentials: true,
      onUploadProgress
    });
  },
  postMediaAvatarGroup: ({ id, avatar, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", avatar.value.file);
    return axios.post(`/contents/avatars/groups/${id}`, data, {
      withCredentials: true,
      onUploadProgress
    });
  },
  postGroupImageContent: ({ groupId, userId, image, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", image);
    return axios.post(`/contents/images/${groupId}/${userId}`, data, {
      withCredentials: true,
      onUploadProgress
    });
  }
};

export default mediasApi;
