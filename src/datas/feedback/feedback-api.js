import axios from "axios";

const feedbackApi = {
  postFeedback: ({ text }) => {
    const data = { data: text };
    return axios.post(`/emailing/feedback`, data);
  }
};

export default feedbackApi;
