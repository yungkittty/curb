import _ from "lodash";
import { css } from "styled-components";
import { Dimensions } from "react-native";
import screenWidths from "./screen-widths";

const { width } = Dimensions.get("window");

const screenWidthsMedias = _.reduce(
  screenWidths,
  // eslint-disable-next-line
  (screenWidthsMedia, screenWidths, screenType) => ({
    ...screenWidthsMedia,
    [screenType]: (...screenArgs) => css`
      ${width > screenWidths ? css(...screenArgs) : null};
    `
  }),
  {}
);
export default screenWidthsMedias;
