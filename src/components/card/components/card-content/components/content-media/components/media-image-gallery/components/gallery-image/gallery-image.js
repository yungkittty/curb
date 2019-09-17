import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../../../../../../button";
import Image from "../../../../../../../../../image";

const GalleryImage = ({ src, cardSize, isOneImage, isLastImage, mediaDataLength, ...others }) => {
  const isImageFromApi = src.substr(0, 9) === "/contents";
  return (
    <Button
      style={{ marginRight: !isOneImage && isLastImage ? 10 : 0 }}
      onClick={() => window.open(`${process.env.REACT_APP_API_URL}${src}`)}
      disabled={!isImageFromApi}
    >
      <Image
        {...others}
        src={src}
        objectFit="cover"
        style={{
          width:
            (cardSize.width - (mediaDataLength === 1 ? 0 : (mediaDataLength - 1) * 10)) / mediaDataLength,
          height: cardSize.contentHeight
        }}
      />
    </Button>
  );
};

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  cardSize: PropTypes.shape({
    width: PropTypes.number,
    contentHeight: PropTypes.number
  }).isRequired,
  isOneImage: PropTypes.bool.isRequired,
  isLastImage: PropTypes.bool.isRequired,
  mediaDataLength: PropTypes.number.isRequired
};

export default GalleryImage;
