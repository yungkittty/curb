import _ from "lodash";
import { css } from "styled-components";
import screenWidths from "./screen-widths";

const screenWidthsMedia = _.reduce(
  screenWidths,
  // eslint-disable-next-line
  (screenWidthsMedia, screenWidth, screenType) => ({
    ...screenWidthsMedia,
    [screenType]: (...screenArgs) => css`
      @media (min-width: ${screenWidth / 16}em) {
        ${css(...screenArgs)};
      }
    `
  }),
  {}
);

export default screenWidthsMedia;
