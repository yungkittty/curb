import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import TextDescription from "./components/text-description";
import TextDescriptionPlaceholderContainer from "./components/text-description-placeholder-container";
import TextDescriptionPlaceholder from "./components/text-description-placeholder";
import TextReadMore from "./components/text-read-more";
import { platformBools } from "../../../../../../configurations/platform";

const FooterText = ({
  t,
  cardSize,
  isUser,
  textDescription,
  isNoTextDescriptionPlaceholder,
  onClick,
  isExtended
}) => {
  /* eslint-disable */
  const maxLength = platformBools.isWeb
    ? cardSize.size === "small"
      ? isUser
        ? 50
        : 130
      : isUser
      ? 130
      : 220
    : isUser
    ? 70
    : 130;
  /* eslint-enable */
  const isTextTrimmed = textDescription.length <= maxLength;
  // eslint-disable-next-line
  return textDescription ? (
    <TextDescription isTextTrimmed={isTextTrimmed}>
      {isTextTrimmed || isExtended
        ? textDescription
        : `${textDescription.substring(0, maxLength).trim()}... `}
      {textDescription.length > maxLength && !isExtended && (
        <TextReadMore onClick={onClick}>{t("readMore")}</TextReadMore>
      )}
    </TextDescription>
  ) : !isNoTextDescriptionPlaceholder ? (
    <TextDescriptionPlaceholderContainer>
      {_.times(3, index => (
        <TextDescriptionPlaceholder key={index} />
      ))}
    </TextDescriptionPlaceholderContainer>
  ) : null;
};

FooterText.defaultProps = {
  textDescription: "",
  isNoTextDescriptionPlaceholder: false,
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
  isUser: PropTypes.bool.isRequired,
  textDescription: PropTypes.string,
  isNoTextDescriptionPlaceholder: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isExtended: PropTypes.bool
};

export default withTranslation("common")(FooterText);
