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
    {_.reduce(
      postMediaTypes,
      (result, { onClick, onSelect }, type) => [
        ...result,
        <MediaTypesIcon key={type}>
          <Icon icon={mediaTypeToIcon(type)} size="small" color={theme.primaryColor} />
          {/* eslint-disable-next-line */}
          {type === "image" ? (
            <InputImage
              onSelect={(data, file) => onSelect({ type, data, file })}
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
              onSelect={(data, file) => onSelect({ type, data, file })}
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
              onClick={() => onClick({ type })}
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
      ],
      []
    )}
  </MediaTypesContainer>
);

CardAddMediaTypes.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  postMediaTypes: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(CardAddMediaTypes);
