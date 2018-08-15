import { css } from "styled-components";
import screensWidth from "./screens-width";

const screensWidthMedia = Object.keys(screensWidth).reduce(
  // eslint-disable-next-line
  (screensWidthMedia, screenType) => {
    const screenEm = screensWidth[screenType] / 16;
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
