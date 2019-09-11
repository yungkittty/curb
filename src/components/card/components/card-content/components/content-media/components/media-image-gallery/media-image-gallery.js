import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Image from "../../../../../../../image";

const MediaImageGallery = ({ mediaData }) => {
  const isOneImage = mediaData.length === 1;
  return (
    <React.Fragment>
      {_.map(mediaData, (src, index) => {
        const isImageFromApi = src.substr(0, 9) === "/contents";
        return (
          <Image
            src={src}
            style={{
              marginRight: !isOneImage && index !== mediaData.length - 1 && 15
            }}
            onClick={() => isImageFromApi && window.open(src)}
          />
        );
      })}
    </React.Fragment>
  );
};

MediaImageGallery.propTypes = {
  mediaData: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default MediaImageGallery;
