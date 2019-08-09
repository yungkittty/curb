import React from "react";
import PropTypes from "prop-types";
import ImageContainer from "./components/image-container";
import ImageGroup from "../../../../../../components/image-group";

const HeaderImage = ({
  // eslint-disable-line
  groupId
}) => (
  <ImageContainer>
    <ImageGroup
      // eslint-disable-line
      shouldFetch={false}
      groupId={groupId}
      size="extra-extra-large"
      // placeholderColor={}
    />
  </ImageContainer>
);

HeaderImage.propTypes = {
  groupId: PropTypes.string.isRequired
};

export default HeaderImage;
