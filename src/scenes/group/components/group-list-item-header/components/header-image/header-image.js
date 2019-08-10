import React from "react";
import PropTypes from "prop-types";
import ImageContainer from "./components/image-container";
import ImageGroup from "../../../../../../components/image-group";

const HeaderImage = ({
  // eslint-disable-line
  groupId,
  groupGradientColors
}) => (
  <ImageContainer>
    <ImageGroup
      // eslint-disable-line
      shouldFetch={false}
      groupId={groupId}
      size="extra-extra-large"
      placeholderColor={groupGradientColors[1]}
    />
  </ImageContainer>
);

HeaderImage.propTypes = {
  groupId: PropTypes.string.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HeaderImage;
