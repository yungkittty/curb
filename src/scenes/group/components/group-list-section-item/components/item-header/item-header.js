import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import Button from "../../../../../../components/button";
import ImageUser from "../../../../../../components/image-user";
import HeaderInfos from "./components/header-infos";

/** @TODO WHILE BOTH IS_FETCHING HIDE ! + NAME WITHOUT WIDTH ! */

const ItemHeader = ({
  // eslint-disable-line
  isFetchingMedia,
  mediaCreatorId,
  mediaDateCreation,
  theme
}) => (
  <HeaderContainer>
    <Button
      // eslint-disable-line
      component={ImageUser}
      userId={mediaCreatorId}
      size="small"
      placeholderColor={theme.primaryVariantColor}
    />
    <HeaderInfos
      // eslint-disable-line
      userId={mediaCreatorId}
      isFetchingMedia={isFetchingMedia}
      mediaDateCreation={mediaDateCreation}
    />
  </HeaderContainer>
);

ItemHeader.propTypes = {
  isFetchingMedia: PropTypes.bool.isRequired,
  mediaCreatorId: PropTypes.string.isRequired,
  mediaDateCreation: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default ItemHeader;
