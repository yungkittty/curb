import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../button-container";
import ImageGroup from "../image-group";

const ButtonImageGroup = ({
  // eslint-disable-line
  className,
  style,
  contentImageStyle,
  onClick,
  groupId,
  ...others
}) => (
  <ButtonContainer className={className} style={style} onClick={onClick}>
    <ImageGroup {...others} style={contentImageStyle} groupId={groupId} />
  </ButtonContainer>
);

ButtonImageGroup.defaultProps = {
  className: undefined,
  style: undefined,
  contentImageStyle: undefined,
  onClick: undefined,
  groupId: undefined
};

ButtonImageGroup.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentImageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  groupId: PropTypes.string
};

export default ButtonImageGroup;
