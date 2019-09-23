import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import Button from "../../../../../../components/button";
import ImageUser from "../../../../../../components/image-user";
import HeaderInfos from "./components/header-infos";
import withUser from "../../../../../../hocs/with-user";

const ItemHeader = ({
  // eslint-disable-line
  userId,
  userName,
  mediaDateCreation,
  theme
}) => (
  <HeaderContainer>
    <Button
      // eslint-disable-line
      onClick={`/users/${userId}`}
      component={ImageUser}
      shouldFetch={false}
      userId={userId}
      size="small"
      placeholderColor={theme.primaryVariantColor}
    />
    <HeaderInfos
      // eslint-disable-line
      userId={userId}
      userName={userName}
      mediaDateCreation={mediaDateCreation}
    />
  </HeaderContainer>
);

ItemHeader.propTypes = {
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withUser(ItemHeader);
