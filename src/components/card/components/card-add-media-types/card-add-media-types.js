import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import MediaTypesContainer from "./components/media-types-container";
import MediaTypesIcon from "./components/media-types-icon";
import Icon from "../../../icon";
import Button from "../../../button";
import InputImage from "../../../input-image";
import InputVideo from "../../../input-video";
import mediaTypeToIcon from "../../../../utils/media-type-to-icon";

const CardAddMediaTypes = ({ theme, postMediaTypes }) => (
  <MediaTypesContainer>
    {_.map(
      postMediaTypes,
      ({ type, onClick, onSelect }, index) =>
        type !== "text" && (
          <MediaTypesIcon key={index}>
            <Icon icon={mediaTypeToIcon(type)} size="small" color={theme.primaryColor} />
            {/* eslint-disable-next-line */}
            {type === "image" ? (
              <InputImage
                onSelect={onSelect}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
              />
            ) : /* eslint-disable-next-line */
            type === "video" ? (
              <InputVideo
                onSelect={onSelect}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
              />
            ) : onClick ? (
              <Button
                onClick={onClick}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
              />
            ) : null}
          </MediaTypesIcon>
        )
    )}
  </MediaTypesContainer>
);

CardAddMediaTypes.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  postMediaTypes: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string.isRequired, onClick: PropTypes.func, onSelect: PropTypes.func })
  ).isRequired
};

export default withTheme(CardAddMediaTypes);
