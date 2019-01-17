import _ from "lodash";
import discoveryActionsTypes from "./discovery-actions-types";

const initialState = { groups: [] };

const discoveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case discoveryActionsTypes.GET_DISCOVERY_SUCCESS:
      return _.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default discoveryReducer;
