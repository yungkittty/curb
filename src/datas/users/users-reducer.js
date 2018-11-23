import _ from "lodash";
import usersActionsTypes from "./users-actions-types";

const initialState = { byId: {}, allIds: [] };

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersActionsTypes.GET_USER_SUCCESS:
      return _.assign({}, state, {
        byId: _.assign({}, state.byId, { [action.payload.id]: action.payload }),
        allIds: _.concat([], state.allIds, [action.payload.id])
      });
    default:
      return state;
  }
};

export default usersReducer;
