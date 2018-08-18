import { all } from "redux-saga/effects";
import { userSaga } from "../../datas/user";

function* rootSaga() { yield all([ ...userSaga ]); }

export default rootSaga;
