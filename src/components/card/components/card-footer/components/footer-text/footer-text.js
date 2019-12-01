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
  textDescription,
  isCardSmall,
  isNoTextDescriptionPlaceholder,
  onClick,
  isExtended
}) => {
  const maxLength = !isCardSmall && (platformBools.isWeb ? 130 : 70);
  const isTextTrimmed = textDescription.length > maxLength;
  // eslint-disable-next-line
  return textDescription ? (
    <TextDescription isCardSmall={isCardSmall}>
      {!isTextTrimmed || isExtended || isCardSmall
        ? textDescription
        : `${textDescription.substring(0, maxLength).trim()}... `}
      {isTextTrimmed && !isExtended && !isCardSmall && (
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
  isCardSmall: PropTypes.bool.isRequired,
  textDescription: PropTypes.string,
  isNoTextDescriptionPlaceholder: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  isExtended: PropTypes.bool
};

export default withTranslation("common")(FooterText);
