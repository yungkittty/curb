import React from "react";
import PropTypes from "prop-types";
import GroupContainer from "./components/group-container";
import ImageGroup from "../image-group";

const ButtonImageGroup = ({
  // eslint-disable-line
  className,
  style,
  contentImageStyle,
  groupId,
  size,
  ...others
}) => (
  <GroupContainer
    // eslint-disable-line
    className={className}
    style={style}
    size={size}
    onClick={`/groups/${groupId}`}
  >
    <ImageGroup
      // eslint-disable-line
      {...others}
      style={contentImageStyle}
      groupId={groupId}
      size={size}
    />
  </GroupContainer>
);

ButtonImageGroup.defaultProps = {
  className: undefined,
  style: undefined,
  contentImageStyle: undefined
};

ButtonImageGroup.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentImageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  groupId: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large"
  ]).isRequired
};

export default ButtonImageGroup;
