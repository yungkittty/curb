import React, { createElement } from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";

const WindowContent = ({ content }) => (
  <ContentContainer>
    {content ? createElement(content, null) : null}
  </ContentContainer>
);

WindowContent.defaultProps = {
  content: undefined
};

WindowContent.propTypes = {
  content: PropTypes.func
};

export default WindowContent;
