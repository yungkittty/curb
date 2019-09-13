import _ from "lodash";
import { css } from "styled-components";
import windowBreakpoints from "./window-breakpoints";
import windowDimensions from "./window-dimensions"; // eslint-disable-line

const windowQueries = _.reduce(
  windowBreakpoints,
  // eslint-disable-next-line
  (windowQueries, windowBreakpoint, windowType) => {
    const windowWidth = windowDimensions.getWidth();
    return _.assign({}, windowQueries, {
      [windowType]: (...windowQuerieArgs) =>
        // eslint-disable-line
        windowWidth > windowBreakpoint ? css(...windowQuerieArgs) : ""
    });
  },
  {}
);

export default windowQueries;
