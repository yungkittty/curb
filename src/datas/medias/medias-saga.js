import { all, call, put } from "redux-saga/effects";
import { takeNormalize } from "../../configurations/store/saga-effects";
import mediasActionsTypes from "./medias-actions-types";
import mediasActions from "./medias-actions";
import mediasApi from "./medias-api";

function* getMediaRequestSaga(action) {
  try {
    const { data: payload } = yield call(mediasApi.getMedia, action.payload);
    yield put(mediasActions.getMediaSuccess(payload));
  } catch (error) {
    const { code: errorCode = "" } = (error.response || {}).data;
    yield put(mediasActions.getMediaFailure({ id: action.payload.id, errorCode }));
  }
}

const mediasSaga = all([takeNormalize(mediasActionsTypes.GET_MEDIA_REQUEST, getMediaRequestSaga)]);

export default mediasSaga;
