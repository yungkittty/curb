import _ from "lodash";
import { css } from "styled-components";
import screenWidths from "./screen-widths";

const screenWidthsMedias = _.reduce(
  screenWidths,
  // eslint-disable-next-line no-shadow
  (screenWidthsMedias, screenWidth, screenType) =>
    _.assign({}, screenWidthsMedias, {
      [screenType]: (...screenArgs) =>
        css`
          @media (min-width: ${screenWidth / 16}em) {
            ${css(...screenArgs)};
          }
        `
    }),
  {}
);

export default screenWidthsMedias;
