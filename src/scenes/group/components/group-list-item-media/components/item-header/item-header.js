import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import Button from "../../../../../../components/button";
import ImageUser from "../../../../../../components/image-user";
import HeaderInfos from "./components/header-infos";

const ItemHeader = ({
  // eslint-disable-line
  mediaCreatorId,
  mediaDateCreation,
  theme
}) => (
  <HeaderContainer>
    <Button
      // eslint-disable-line
      onClick={`/users/${mediaCreatorId}`}
      component={ImageUser}
      userId={mediaCreatorId}
      size="small"
      placeholderColor={theme.primaryVariantColor}
    />
    <HeaderInfos
      // eslint-disable-line
      userId={mediaCreatorId}
      mediaDateCreation={mediaDateCreation}
    />
  </HeaderContainer>
);

ItemHeader.propTypes = {
  mediaCreatorId: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default ItemHeader;
