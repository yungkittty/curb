import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import GroupContainer from "./components/group-container";
import ImageGroup from "../image-group";

const ButtonImageGroup = ({
  // eslint-disable-line
  className,
  style,
  contentImageStyle,
  groupId,
  history,
  onClick,
  size,
  ...others
}) => (
  <GroupContainer
    // eslint-disable-line
    className={className}
    style={style}
    size={size}
    onClick={() => {
      // eslint-disable-next-line
      onClick && onClick();
      history.push(`/groups/${groupId}`);
    }}
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
  contentImageStyle: undefined,
  onClick: undefined
};

ButtonImageGroup.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentImageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  groupId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    // eslint-disable-line
    "extra-small",
    "small",
    "medium",
    "large"
  ]).isRequired
};

export default withRouter(ButtonImageGroup);
