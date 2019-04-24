import axios from "axios";

const mediasApi = {
  getMedia: ({ id }) => axios.get(`/contents/${id}`, { withCredentials: true }),
  postMediaAvatar: ({ target, id, avatar, onUploadProgress }) => {
    const data = new FormData();
    data.append("file", avatar);
    return axios.post(`/contents/avatars/${target}/${id}`, data, {
      withCredentials: true,
      onUploadProgress: onUploadProgress
        ? progress => onUploadProgress(progress.loaded / progress.total)
        : undefined
    });
  }
};

export default mediasApi;
