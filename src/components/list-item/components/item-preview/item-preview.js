import React from "react";
import PropTypes from "prop-types";
import PreviewContainer from "./components/preview-container";
import PreviewTitle from "./components/preview-title";
import PreviewDescription from "./components/preview-description";

const ItemPreview = ({ title, titleColor, titleCentered, description }) => (
  <PreviewContainer titleCentered={titleCentered}>
    <PreviewTitle titleColor={titleColor} titleCentered={titleCentered}>
      {title}
    </PreviewTitle>
    <PreviewDescription>{description}</PreviewDescription>
  </PreviewContainer>
);

ItemPreview.defaultProps = {
  title: undefined,
  titleColor: undefined,
  titleCentered: undefined,
  description: undefined
};

ItemPreview.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  titleCentered: PropTypes.bool,
  description: PropTypes.string
};

export default ItemPreview;
