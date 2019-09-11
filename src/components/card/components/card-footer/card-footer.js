import React from "react";
import PropTypes from "prop-types";
import FooterContainer from "./components/footer-container";
import FooterOrigin from "./components/footer-origin";
import FooterTextInput from "./components/footer-text-input";
import FooterText from "./components/footer-text";

const CardFooter = ({ cardSize, userId, textDescription, isPost, postText, ...others }) => (
  <FooterContainer cardSize={cardSize}>
    {userId && <FooterOrigin cardSize={cardSize} userId={userId} isPost={isPost} {...others} />}
    {isPost ? (
      postText && <FooterTextInput isMultiline {...postText} />
    ) : (
      <FooterText cardSize={cardSize} userId={userId} textDescription={textDescription} />
    )}
  </FooterContainer>
);

CardFooter.defaultProps = {
  userId: undefined,
  textDescription: undefined
};

CardFooter.propTypes = {
  cardSize: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }).isRequired,
  userId: PropTypes.string,
  textDescription: PropTypes.string,
  isPost: PropTypes.bool.isRequired,
  postText: PropTypes.shape({ value: PropTypes.string, onChange: PropTypes.func }).isRequired
};

export default CardFooter;
