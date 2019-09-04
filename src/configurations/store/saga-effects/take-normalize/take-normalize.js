import _ from "lodash";
import { fork, take } from "redux-saga/effects";

const takeNormalize = (patternOrChannel, saga, ...sagaArgs) =>
  fork(
    // eslint-disable-next-line
    function*() {
      const sagaForksById = {};
      const sagaFilter = sagaActionId => !sagaForksById[sagaActionId] || !sagaForksById[sagaActionId].isRunning();
      const sagaAssign = (sagaFork, sagaActionId) => { sagaForksById[sagaActionId] = sagaFork; };
      while (true) {
        const sagaAction = yield take(patternOrChannel);
        const sagaActionHasId = _.has(sagaAction.payload, "id");
        const sagaActionHasIds = _.has(sagaAction.payload, "ids");
        if (!sagaActionHasId && !sagaActionHasIds)
          // eslint-disable-next-line
          throw "takeNormalize only accept actions of normalized reducers.";
        const sagaActionIds = sagaActionHasIds ? sagaAction.payload.ids : [sagaAction.payload.id];
        const sagaActionIdsFiltered = _.filter(sagaActionIds, sagaFilter);
        if (!sagaActionIdsFiltered.length) {
          continue; // eslint-disable-line
        } else if (sagaActionIds.length !== sagaActionIdsFiltered.length) {
          sagaAction.payload.ids = sagaActionIdsFiltered; }
        const sagaFork = yield fork(saga, ..._.concat(sagaArgs, sagaAction));
        _.forEach(sagaActionIds, _.bind(sagaAssign, undefined, sagaFork));
      }
    }
  );

export default takeNormalize;
