import axios from "axios";
import TestFairy from "react-native-testfairy";

const mediasApi = {
  getMedia: ({ id }) => axios.get(`/contents/${id}`, { withCredentials: true }),
  postMediaUserAvatar: ({ id, payload }) => {
    const data = new FormData();
    data.append("file", payload.avatar);
    TestFairy.log(id);
    TestFairy.log(payload);
    return axios.post(`/contents/avatars/users/${payload.id || id}`, data, {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data"
      }
    });
  }
};

export default mediasApi;
