import axios from "axios";

const mediasApi = {
  getMedia: ({ id }) => axios.get(`/contents/${id}`, { withCredentials: true }),
  postMediaUserAvatar: ({ id, payload }) => {
    const data = new FormData();
    data.append("file", payload.avatar);
    return axios.post(`/contents/avatars/users/${payload.id || id}`, data, {
      withCredentials: true,
      onUploadProgress: payload.onUploadProgress
        ? progress => payload.onUploadProgress(progress.loaded / progress.total)
        : undefined
    });
  }
};

export default mediasApi;
