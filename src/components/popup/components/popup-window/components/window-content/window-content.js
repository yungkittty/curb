import React, { createElement } from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";

const WindowContent = ({ content, onChange, data }) => {
  return (
    <ContentContainer>
      {content ? createElement(content, { onChange, data }) : null}
    </ContentContainer>
  );
};

WindowContent.defaultProps = {
  content: undefined
};

WindowContent.propTypes = {
  content: PropTypes.func
};

export default WindowContent;
