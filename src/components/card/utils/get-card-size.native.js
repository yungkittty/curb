import { windowDimensions } from "../../../configurations/window";

const getCardSize = ({ size, isCardExtended, isOnlyPostTextMode }) => {
  const width = windowDimensions.getWidth() - 20;
  const contentHeight = (windowDimensions.getWidth() - 20) * (9 / 16);
  return {
    size,
    isCardExtended,
    isOnlyPostTextMode,
    width,
    contentHeight,
    footerHeight: 100
  };
};

export default getCardSize;
