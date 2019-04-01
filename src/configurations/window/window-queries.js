import _ from "lodash";
import { css } from "styled-components";
import windowBreakpoints from "./window-breakpoints";

const windowQueries = _.reduce(
  windowBreakpoints,
  // eslint-disable-next-line
  (windowQueries, windowBreakpoint, windowType) => {
    return _.assign({}, windowQueries, {
      [windowType]: (...windowQuerieArgs) => css`
        @media (min-width: ${windowBreakpoint / 16}em) {
          ${css(...windowQuerieArgs)};
        }
      `
    });
  },
  {}
);

export default windowQueries;
