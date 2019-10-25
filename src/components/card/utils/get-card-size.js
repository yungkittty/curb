const getCardSize = ({ size, isCardExtended, isOnlyPostTextMode }) => {
  switch (size) {
    case "small":
      return {
        size,
        isCardExtended,
        isOnlyPostTextMode,
        width: 415,
        contentHeight: 233,
        footerHeight: 136
      };
    default:
      return {
        size,
        isCardExtended,
        isOnlyPostTextMode,
        width: 600,
        contentHeight: 338,
        footerHeight: 146
      };
  }
};

export default getCardSize;
