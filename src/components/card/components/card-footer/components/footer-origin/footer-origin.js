import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import OriginContainer from "./components/origin-container";
import Button from "../../../../../button";
import ImageUser from "../../../../../image-user";
import OriginInfos from "./components/origin-infos";
import withUser from "../../../../../../hocs/with-user";

const FooterOrigin = ({ cardSize, userId, userName, mediaDateCreation, isPost, theme }) => (
  <OriginContainer cardSize={cardSize} isSubtitle={!!mediaDateCreation}>
    <Button
      // eslint-disable-line
      onClick={`/users/${userId}`}
      component={ImageUser}
      shouldFetch={false}
      userId={userId}
      size="extra-small"
      placeholderColor={theme.primaryVariantColor}
    />
    <OriginInfos
      // eslint-disable-line
      theme={theme}
      userId={userId}
      infosTitle={userName}
      mediaDateCreation={mediaDateCreation}
      isPost={isPost}
    />
  </OriginContainer>
);

FooterOrigin.defaultProps = {
  userId: undefined,
  userName: undefined,
  mediaDateCreation: undefined
};

FooterOrigin.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  cardSize: PropTypes.shape({
    size: PropTypes.string,
    isCardExtended: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  userId: PropTypes.string,
  userName: PropTypes.string,
  mediaDateCreation: PropTypes.string,
  isPost: PropTypes.bool.isRequired
};

export default withTheme(withUser(FooterOrigin));
