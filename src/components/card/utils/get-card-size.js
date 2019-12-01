const getCardSize = ({ size, isCardExtended, isOnlyPostTextMode }) => {
  const width = size === "small" ? 460 : 600;
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
