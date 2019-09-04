import React from "react";
import PropTypes from "prop-types";
import InfosContainer from "./components/infos-container";
import ImageUser from "../../../../../image-user";

const FooterInfos = ({ postId, userId, groupId }) => (
  <InfosContainer>
    <ImageUser placeholderColor="yellow" userId={userId} />
  </InfosContainer>
);

FooterInfos.defaultProps = {
  size: undefined,
  userId: undefined,
  groupId: undefined,
  textDescription: undefined
};

FooterInfos.propTypes = {
  size: PropTypes.string,
  userId: PropTypes.string,
  groupId: PropTypes.string,
  textDescription: PropTypes.string
};

export default FooterInfos;
