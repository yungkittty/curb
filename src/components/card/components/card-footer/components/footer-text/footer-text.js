import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import { withTranslation } from "react-i18next";
import TextDescription from "./components/text-description";
import TextDescriptionPlaceholder from "./components/text-description-placeholder";
import Button from "../../../../../button";
import Text from "../../../../../text";

const FooterText = ({ t, theme, cardSize, userId, textDescription, onClick }) => {
  // eslint-disable-next-line
  const maxLength = cardSize.size === "small" ? (userId ? 50 : 130) : userId ? 130 : 220;
  return textDescription ? (
    <TextDescription>
      {textDescription.length <= maxLength
        ? textDescription
        : `${textDescription.substring(0, maxLength).trim()}...`}
      {userId && textDescription.length > maxLength && (
        <Button
          as={Text}
          onClick={onClick}
          style={{ display: "initial", marginLeft: 5, color: theme.linkColor }}
        >
          {t("readMore")}
        </Button>
      )}
    </TextDescription>
  ) : (
    _.times(3, () => <TextDescriptionPlaceholder />)
  );
};

FooterText.defaultProps = {
  userId: undefined,
  textDescription: undefined
};

FooterText.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired, // eslint-disable-line
  cardSize: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }).isRequired,
  userId: PropTypes.string,
  textDescription: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withTheme,
  withTranslation("common")
])(FooterText);
