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
    return axios.post(`/contents/avatars/groups/${id}`, data, {
      onUploadProgress
    });
  },
  postMediaText: ({ postId, data }) => axios.post(`/contents/texts/${postId}`, { data }),
  postMediaImage: ({ postId, data, onUploadProgress }) => {
    const fromData = new FormData();
    fromData.append("file", data);
    return axios.post(`/contents/images/${postId}`, fromData, {
      onUploadProgress
    });
  },
  postMediaVideo: ({ postId, data, onUploadProgress }) => {
    const fromData = new FormData();
    fromData.append("file", data);
    return axios.post(`/contents/videos/${postId}`, fromData, {
      onUploadProgress
    });
  },
  postMediaLocation: ({ postId, data }) => axios.post(`/contents/locations/${postId}`, { data }),
  postMediaEvent: ({ postId, data }) => axios.post(`/contents/events/${postId}`, { data })
};

export default mediasApi;
