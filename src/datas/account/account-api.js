import axios from "axios";

const accountApi = {
  deleteAccount: ({ currentUserId }) => axios.delete(`/accounts/${currentUserId}`)
};

export default accountApi;
