import _ from "lodash";
import discoveryActionsTypes from "./discovery-actions-types";

const discoveryReducer = (state = {}, action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_SUCCESS:
      return _.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default discoveryReducer;
