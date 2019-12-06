import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import GalleryImage from "./components/gallery-image";
import CurbModule from "../curb-module";

class CardImageGallery extends CurbModule {
  getData() {
    const { imageList: imageListProps } = this.props;
    const imageList = [];
    _.forEach(imageListProps, ({ file }) => imageList.push(file));
    return imageList;
  }

  render() {
    const { imageList, ...others } = this.props;
    const isOneImage = imageList.length === 1;
    return _.map(imageList, ({ data }, index) => (
      <GalleryImage
        {...others}
        key={index}
        src={data}
        isOneImage={isOneImage}
        isLastImage={index !== imageList.length - 1}
      />
    ));
  }
}

CardImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardImageGallery;
