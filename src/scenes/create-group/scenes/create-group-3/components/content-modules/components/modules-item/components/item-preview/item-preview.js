import React from "react";
import PropTypes from "prop-types";
import PreviewContainer from "./components/preview-container";
import PreviewTitle from "./components/preview-title";
import PreviewDescription from "./components/preview-description";

const ItemPreview = ({ title, description }) => (
  <PreviewContainer>
    <PreviewTitle>{title}</PreviewTitle>
    <PreviewDescription>{description}</PreviewDescription>
  </PreviewContainer>
);

ItemPreview.defaultProps = {
  title: undefined,
  description: undefined
};

ItemPreview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default ItemPreview;
