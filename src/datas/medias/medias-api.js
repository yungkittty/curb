import axios from "axios";

const mediasApi = {
  getMedia: ({ id }) => axios.get(`/contents/${id}`, { withCredentials: true }),
  postMediaAvatar: ({ target, id, avatar, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", avatar);
    return axios.post(`/contents/avatars/${target}/${id}`, data, {
      withCredentials: true,
      onUploadProgress: onUploadProgress ? progress => onUploadProgress(progress) : undefined
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
