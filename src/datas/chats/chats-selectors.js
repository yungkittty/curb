const chatsSelectors = {};

chatsSelectors.getChatById = id => state => state.chats.byId[id];

chatsSelectors.getChatAllIds = state => state.chats.allIds;

export default chatsSelectors;
