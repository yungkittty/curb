import _ from "lodash";
import groupsActionsTypes from "./groups-actions-types";

const initialState = { byId: {}, allIds: [] };

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case groupsActionsTypes.GET_GROUP_SUCCESS:
      return _.assign({}, state, {
        byId: _.assign({}, state.byId, { [action.payload.id]: action.payload }),
        allIds: _.merge([], state.allIds, [action.payload.id])
      });
    default:
      return state;
  }
};

export default groupsReducer;
