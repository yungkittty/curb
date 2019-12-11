import { windowDimensions } from "../../../configurations/window";

const getCardSize = ({ size, isCardExtended }) => {
  const width = windowDimensions.getWidth() - (size === "small" ? 90 : 20);
  const contentHeight = width * (9 / 16);
  switch (size) {
    case "small":
      return {
        isSmall: true,
        isCardExtended,
        width,
        contentHeight
      };
    default:
      return {
        isSmall: false,
        isCardExtended,
        width,
        contentHeight
      };
  }
};

export default getCardSize;
