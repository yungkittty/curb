import React from "react";
import PropTypes from "prop-types";
import PreviewContainer from "./components/preview-container";
import PreviewTitle from "./components/preview-title";
import PreviewDescription from "./components/preview-description";

const ItemPreview = ({ title, titleColor, titleCentered, description, disabled, noIcon }) => (
  <PreviewContainer titleCentered={titleCentered} noIcon={noIcon}>
    <PreviewTitle titleColor={titleColor} titleCentered={titleCentered} disabled={disabled} weight={700}>
      {title}
    </PreviewTitle>
    {!titleCentered && <PreviewDescription disabled={disabled}>{description}</PreviewDescription>}
  </PreviewContainer>
);

ItemPreview.defaultProps = {
  titleColor: undefined,
  titleCentered: undefined,
  description: undefined,
  disabled: undefined
};

ItemPreview.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  titleCentered: PropTypes.bool,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  noIcon: PropTypes.bool.isRequired
};

export default ItemPreview;
