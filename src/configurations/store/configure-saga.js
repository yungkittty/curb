import _ from "lodash";
import createSagaMiddleware from "redux-saga";

// https://gist.github.com/keeth/96b97c6cf890187d0b17d98ce9d4fbd4

const configureSaga = () => {
  const sagaMiddleware = createSagaMiddleware();
  const sagaMiddlewareBis = sagaProps => sagaNext =>
    // eslint-disable-line
    sagaAction => {
      const sagaDispatch = sagaMiddleware(sagaProps)(() => {});
      const sagaState = sagaNext(sagaAction);
      const isSagaActionBatched = sagaAction.meta && sagaAction.meta.batch;
      const sagaActions = isSagaActionBatched ? sagaAction.payload : [sagaAction];
      _.forEach(sagaActions, sagaDispatch);
      return sagaState;
    };
  sagaMiddlewareBis.run = sagaMiddleware.run;
  return sagaMiddlewareBis;
};

export default configureSaga;
