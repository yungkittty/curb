import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import GalleryImage from "./components/gallery-image";
import CurbModule from "../curb-module";

class CardImageGallery extends CurbModule {
  getData() {
    const { imagesData } = this.props;
    const imageList = [];
    _.forEach(imagesData, ({ file }) => imageList.push(file));
    return imageList;
  }

  render() {
    const { imagesData, ...others } = this.props;
    const isOneImage = imagesData.length === 1;
    return _.map(imagesData, ({ data }, index) => (
      <GalleryImage
        {...others}
        key={index}
        src={data}
        isOneImage={isOneImage}
        isLastImage={index !== imagesData.length - 1}
      />
    ));
  }
}

CardImageGallery.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardImageGallery;
