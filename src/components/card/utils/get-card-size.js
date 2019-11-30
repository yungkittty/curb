const getCardSize = ({ size, isCardExtended, isOnlyPostTextMode }) => {
  const width = size === "small" ? 415 : 600;
  const contentHeight = width * (9 / 16);
  switch (size) {
    case "small":
      return {
        size,
        isCardExtended,
        isOnlyPostTextMode,
        width,
        contentHeight,
        footerHeight: 136
      };
    default:
      return {
        size,
        isCardExtended,
        isOnlyPostTextMode,
        width,
        contentHeight,
        footerHeight: 138
      };
  }
};

export default getCardSize;
