const getCardSize = ({ size, isCardExtended, isPostMode, isOnlyPostTextMode }) => {
  switch (size) {
    case "small":
      return {
        size,
        isCardExtended,
        isOnlyPostTextMode,
        width: 415,
        contentHeight: 233,
        footerHeight: 120,
        floatingTopPosition: isOnlyPostTextMode ? -30 : isPostMode && !isCardExtended ? 55 : 203 // eslint-disable-line
      };
    default:
      return {
        size,
        isCardExtended,
        isOnlyPostTextMode,
        width: 600,
        contentHeight: 338,
        footerHeight: 130,
        floatingTopPosition: isOnlyPostTextMode ? -30 : isPostMode && !isCardExtended ? 55 : 308 // eslint-disable-line
      };
  }
};

export default getCardSize;
