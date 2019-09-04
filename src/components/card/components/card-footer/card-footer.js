import React from "react";
import PropTypes from "prop-types";
import FooterContainer from "./components/footer-container";
import FooterInfos from "./components/footer-infos";
import FooterTextDescription from "./components/footer-text-description";

const CardFooter = ({ size, userId, groupId, textDescription }) => (
  <FooterContainer size={size}>
    <FooterInfos userId={userId} />
    <FooterTextDescription>{textDescription}</FooterTextDescription>
  </FooterContainer>
);

CardFooter.defaultProps = {
  size: undefined,
  userId: undefined,
  groupId: undefined,
  textDescription: undefined
};

CardFooter.propTypes = {
  size: PropTypes.string,
  userId: PropTypes.string,
  groupId: PropTypes.string,
  textDescription: PropTypes.string
};

export default CardFooter;
