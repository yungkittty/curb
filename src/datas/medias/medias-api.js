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
    data.append("file", avatar.value.file);
    return axios.post(`/contents/avatars/groups/${id}`, data, {
      onUploadProgress
    });
  },
  postMediaImage: ({ groupId, userId, image, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", image.value.file);
    return axios.post(`/contents/images/${groupId}/${userId}`, data, {
      onUploadProgress
    });
  },
  postMediaLocation: ({ groupId, userId, data }) =>
    axios.post(`/contents/locations/${groupId}/${userId}`, data),
  postMediaText: ({ groupId, userId, text }) => {
    const data = { data: text };
    return axios.post(`/contents/texts/${groupId}/${userId}`, data);
  },
  postMediaVideo: ({ groupId, userId, video, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", video.value.file);
    return axios.post(`/contents/videos/${groupId}/${userId}`, data, {
      onUploadProgress
    });
  }
};

export default mediasApi;
