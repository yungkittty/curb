import { windowDimensions } from "../../../configurations/window";

const getCardSize = ({ size, isCardExtended, isOnlyPostTextMode }) => {
  const width = windowDimensions.getWidth() - (size === "small" ? 90 : 20);
  const contentHeight = width * (9 / 16);
  switch (size) {
    case "small":
      return {
        isSmall: true,
        isCardExtended,
        isOnlyPostTextMode,
        width,
        contentHeight
      };
    default:
      return {
        isSmall: false,
        isCardExtended,
        isOnlyPostTextMode,
        width,
        contentHeight
      };
  }
};

export default getCardSize;
