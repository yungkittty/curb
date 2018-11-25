import _ from "lodash";
import { Dimensions } from "react-native";
import { css } from "styled-components";
import screenWidths from "./screen-widths";

// !TODO: lock screen orientation.

const screenWidthsMedias = _.reduce(
  screenWidths,
  // eslint-disable-next-line
  (screenWidthsMedias, screenWidth, screenType) => {
    const { width: currentScreenWidth } = Dimensions.get("window");
    return _.assign({}, screenWidthsMedias, {
      [screenType]: (...screenArgs) =>
        currentScreenWidth > screenWidth ? css(...screenArgs) : ""
    });
  },
  {}
);

export default screenWidthsMedias;
