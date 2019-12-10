import { all, takeEvery, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import chatsActionsTypes from "./chats-actions-types";
import chatsActions from "./chats-actions";
import chatsApi from "./chats-api";

function* getChatMessagesRequestSaga(action) {
  try {
    const { data: payload } = yield call(chatsApi.getChat, action.payload);
    yield put(chatsActions.getChatMessagesSuccess({ messages: payload, id: action.payload.id }));
  } catch (error) {
    console.error(`[CURB-CHATS-SAGA]: ${error}`); // eslint-disable-line
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(chatsActions.getChatMessagesFailure({ id: action.payload.id, errorCode }));
  }
}

function* postChatMessageRequestSaga(action) {
  try {
    yield call(chatsApi.postChatMessage, action.payload);
    yield put(chatsActions.postChatMessageSuccess(action.payload));
  } catch (error) {
    console.error(`[CURB-CHATS-SAGA]: ${error}`); // eslint-disable-line
    const { code: errorCode = "UNKNOWN" } = ((error || {}).response || {}).data || {};
    yield put(chatsActions.postChatMessageFailure({ errorCode }));
  }
}

const chatsSaga = all([
  // eslint-disable-line
  takeNormalize(chatsActionsTypes.GET_CHAT_MESSAGES_REQUEST, getChatMessagesRequestSaga),
  takeEvery(chatsActionsTypes.POST_CHAT_MESSAGE_REQUEST, postChatMessageRequestSaga)
]);

export default chatsSaga;
