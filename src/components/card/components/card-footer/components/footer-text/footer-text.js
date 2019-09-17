import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import TextDescription from "./components/text-description";
import TextDescriptionPlaceholder from "./components/text-description-placeholder";
import TextReadMore from "./components/text-read-more";
import { platformBools } from "../../../../../../configurations/platform";

const FooterText = ({ t, cardSize, userId, textDescription, onClick, isExtended }) => {
  /* eslint-disable */
  const maxLength = platformBools.isWeb
    ? cardSize.size === "small"
      ? userId
        ? 50
        : 130
      : userId
      ? 130
      : 220
    : userId
    ? 70
    : 130;
  /* eslint-enable */
  const isTextTrimmed = textDescription.length <= maxLength || isExtended;
  return textDescription ? (
    <TextDescription isTextTrimmed={isTextTrimmed}>
      {isTextTrimmed ? textDescription : `${textDescription.substring(0, maxLength).trim()}... `}
      {textDescription.length > maxLength && !isExtended && (
        <TextReadMore onClick={onClick}>{t("readMore")}</TextReadMore>
      )}
    </TextDescription>
  ) : (
    _.times(3, () => <TextDescriptionPlaceholder />)
  );
};

FooterText.defaultProps = {
  userId: undefined,
  textDescription: undefined,
  isExtended: false
};

FooterText.propTypes = {
  t: PropTypes.func.isRequired,
  cardSize: PropTypes.shape({
    size: PropTypes.string,
    isCardExtended: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  userId: PropTypes.string,
  textDescription: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isExtended: PropTypes.bool
};

export default withTranslation("common")(FooterText);
