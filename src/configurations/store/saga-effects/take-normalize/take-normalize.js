import { fork, take } from "redux-saga/effects";

const takeNormalize = (patternOrChannel, saga, ...sagaArgs) =>
  fork(
    // eslint-disable-next-line
    function*() {
      const actionsSagas = [];
      while (true) {
        const action = yield take(patternOrChannel);
        if (!action.payload.id)
          // eslint-disable-next-line
          throw "takeNormalize only accept actions of normalized reducer.";
        const actionSaga = actionsSagas[action.payload.id];
        if (actionSaga && actionSaga.isRunning())
          // eslint-disable-next-line
          continue;
        actionsSagas[action.payload.id] = yield fork(saga, ...sagaArgs.concat(action));
      }
    }
  );

export default takeNormalize;
