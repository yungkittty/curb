import axios from "axios";

const postsApi = {
  getPosts: ({ groupId, page, count }) =>
    // eslint-disable-line
    axios.get(`/contents/posts/list/${groupId}?page=${page}&count=${count}`),
  /* postPostReaction: ({ postId }) =>
    // eslint-disable-line
    axios.post(`/contents/posts/reaction/${postId}`), */
  deletePost: ({ postId }) =>
    // eslint-disable-line
    axios.delete(`/contents/posts/${postId}`)
};

export default postsApi;
