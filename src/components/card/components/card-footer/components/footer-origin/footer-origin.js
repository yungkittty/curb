import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import OriginContainer from "./components/origin-container";
import ImageUser from "../../../../../image-user";
import OriginInfos from "./components/origin-infos";
import withUser from "../../../../../../hocs/with-user";

const FooterOrigin = ({ cardSize, userId, userName, postDateCreation, isPost, theme }) => (
  <OriginContainer onClick={`/users/${userId}`} cardSize={cardSize} isSubtitle={!!postDateCreation}>
    <ImageUser
      // eslint-disable-line
      shouldFetch={false}
      userId={userId}
      size="extra-small"
      placeholderColor={theme.primaryVariantColor}
    />
    <OriginInfos
      // eslint-disable-line
      infosTitle={userName}
      postDateCreation={postDateCreation}
      isPost={isPost}
    />
  </OriginContainer>
);

FooterOrigin.defaultProps = {
  userId: undefined,
  userName: undefined,
  postDateCreation: undefined
};

FooterOrigin.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  cardSize: PropTypes.shape({
    isSmall: PropTypes.bool,
    isCardExtended: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    contentHeight: PropTypes.number,
    footerHeight: PropTypes.number,
    floatingTopPosition: PropTypes.number
  }).isRequired,
  userId: PropTypes.string,
  userName: PropTypes.string,
  postDateCreation: PropTypes.string,
  isPost: PropTypes.bool.isRequired
};

export default _.flowRight([
  // eslint-disable-next-line
  withTheme,
  withUser
])(FooterOrigin);
