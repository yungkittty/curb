import React from "react";
import PropTypes from "prop-types";
import CardContainer from "./components/card-container";
import CardFooter from "./components/card-footer";

const Card = ({ size, postId, userId, groupId, textDescription }) => (
  <CardContainer size={size}>
    <CardFooter userId={userId} textDescription={textDescription} />
  </CardContainer>
);

Card.defaultProps = { size: undefined, postId: undefined, groupId: undefined };

Card.propTypes = { size: PropTypes.string, postId: PropTypes.string, groupId: PropTypes.string };

export default Card;
