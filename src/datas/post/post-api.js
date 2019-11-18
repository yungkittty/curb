import axios from "axios";

const postApi = {
  getPost: ({ id }) => axios.get(`/contents/posts/${id}`),
  postPost: ({ groupId }) => axios.post(`/contents/posts/${groupId}`)
};

export default postApi;
