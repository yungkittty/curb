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
  postMediaText: ({ groupId, userId, text, onUploadProgress }) => {
    console.log("ok");
    return axios.post(`/contents/texts/${groupId}/${userId}`, { data: text }, {
      withCredentials: true,
      onUploadProgress
    });
  },
  postMediaVideo: ({ groupId, userId, video, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", video.value.file);
    return axios.post(`/contents/videos/${groupId}/${userId}`, data, {
      withCredentials: true,
      onUploadProgress
    });
  },
  postMediaImage: ({ groupId, userId, image, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", image.value.file);
    return axios.post(`/contents/images/${groupId}/${userId}`, data, {
      withCredentials: true,
      onUploadProgress
    });
  }
};

export default mediasApi;
