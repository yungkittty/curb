import axios from "axios";

/** @TODO : Endpoint should be "/chats" instead of "/chat". */

const chatsApi = {
  getChat: ({ id }) => axios.get(`/chat/${id}`),
  postChatMessage: ({ id, ...others }) => axios.post(`/chat/${id}`, others)
};

export default chatsApi;
