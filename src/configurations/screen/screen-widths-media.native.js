import _ from "lodash";
import { css } from "styled-components";
import { Dimensions } from "react-native";
import screenWidths from "./screen-widths";

const { width } = Dimensions.get('window');

const screenWidthsMedia = _.reduce(
  screenWidths,
  // eslint-disable-next-line
  (screenWidthsMedia, screenWidth, screenType) => ({
    ...screenWidthsMedia,
    [screenType]: (...screenArgs) => css`
      ${width > screenWidth ? css(...screenArgs) : null}
    `
  }),
  {}
);

export default screenWidthsMedia;
