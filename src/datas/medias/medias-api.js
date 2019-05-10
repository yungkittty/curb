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
  postGroupVideoContent: ({ groupId, userId, video, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", video);
    console.log(groupId);
    console.log(userId);
    console.log(video);
    return axios.post(`/contents/videos/${groupId}/${userId}`, data, {
      withCredentials: true,
      onUploadProgress: onUploadProgress ? progress => onUploadProgress(progress) : undefined
    });
  }
};

export default mediasApi;
