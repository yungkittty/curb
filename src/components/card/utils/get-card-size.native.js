import { windowDimensions } from "../../../configurations/window";

const getCardSize = ({ size, isCardExtended, isPostMode, isOnlyPostTextMode }) => {
  const width = windowDimensions.getWidth() - 20;
  const contentHeight = (windowDimensions.getWidth() - 20) * (9 / 16);
  return {
    size,
    isCardExtended,
    isOnlyPostTextMode,
    width,
    contentHeight,
    footerHeight: 100,
    floatingTopPosition: isOnlyPostTextMode ? -25 : isPostMode && !isCardExtended ? 45 : contentHeight - 25 // eslint-disable-line
  };
};

export default getCardSize;
