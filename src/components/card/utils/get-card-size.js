const getCardSize = ({ size, isCardExtended }) => {
  const width = size === "small" ? 460 : 600;
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
