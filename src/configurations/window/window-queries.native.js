import _ from "lodash";
import { css } from "styled-components";
import windowBreakpoints from "./window-breakpoints";
// eslint-disable-next-line
import windowDimensions from "./window-dimensions";

const windowQueries = _.reduce(
  windowBreakpoints,
  // eslint-disable-next-line
  (windowQueries, windowBreakpoint, windowType) => {
    const { width: windowWidth } = windowDimensions;
    return _.assign({}, windowQueries, {
      [windowType]: (...windowQuerieArgs) =>
        windowWidth > windowBreakpoint ? css(...windowQuerieArgs) : ""
    });
  },
  {}
);

export default windowQueries;
