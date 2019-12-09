import axios from "axios";

const postApi = {
  getPostList: ({ groupId, pinned }) => axios.get(`/contents/posts/list/${groupId}?pinned=${pinned}`),
  getPost: ({ id }) => axios.get(`/contents/posts/${id}`),
  postPinPost: ({ id }) => axios.post(`/contents/posts/pin/${id}`),
  postReportPost: ({ id }) => axios.post(`/contents/posts/report/${id}`),
  deletePost: ({ id }) => axios.delete(`/contents/posts/${id}`),
  postLikePost: ({ id }) => axios.post(`/contents/posts/reaction/${id}`),
  postPost: ({ groupId }) => axios.post(`/contents/posts/${groupId}`)
};

export default postApi;
