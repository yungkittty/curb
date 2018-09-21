import { css } from "styled-components";
import screenWidths from "./screen-widths";

const screensWidthMedia = Object.keys(screenWidths).reduce(
  // eslint-disable-next-line
  (screensWidthMedia, screenType) => {
    const screenEm = screenWidths[screenType] / 16;
    return {
      ...screensWidthMedia,
      [screenType]: (...screenArgs) => css`
        @media (min-width: ${screenEm}em) {
          ${css(...screenArgs)};
        }
      `
    };
  },
  {}
);

export default screensWidthMedia;
