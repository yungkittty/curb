import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import ButtonImageUser from "../../../../../../components/button-image-user";
import HeaderInfos from "./components/header-infos";

const ItemHeader = ({
  // eslint-disable-line
  isMediaFetching,
  mediaCreatorId,
  mediaDateCreation,
  theme
}) => (
  <HeaderContainer>
    <ButtonImageUser
      // eslint-disable-line
      userId={mediaCreatorId}
      size="small"
      placeholderColor={theme.primaryVariantColor}
    />
    <HeaderInfos
      // eslint-disable-line
      userId={mediaCreatorId}
      isMediaFetching={isMediaFetching}
      mediaDateCreation={mediaDateCreation}
    />
  </HeaderContainer>
);

ItemHeader.propTypes = {
  isMediaFetching: PropTypes.bool.isRequired,
  mediaCreatorId: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired // eslint-disable-line
};

export default ItemHeader;
