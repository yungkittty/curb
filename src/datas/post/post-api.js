import axios from "axios";

const postApi = {
  getPost: ({ postId }) => axios.get(`/contents/posts${postId}`),
  postPost: ({ groupId }) => axios.post(`/contents/posts/${groupId}`)
};

export default postApi;
