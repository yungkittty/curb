const getCardSize = ({ size, isCardExtended, isPostMode }) => {
  switch (size) {
    case "small":
      return {
        size,
        isCardExtended,
        width: 415,
        contentHeight: 233,
        footerHeight: 120,
        floatingTopPosition: isPostMode && !isCardExtended ? 55 : 203
      };
    default:
      return {
        size,
        isCardExtended,
        width: 600,
        contentHeight: 338,
        footerHeight: 130,
        floatingTopPosition: isPostMode && !isCardExtended ? 55 : 308
      };
  }
};

export default getCardSize;
