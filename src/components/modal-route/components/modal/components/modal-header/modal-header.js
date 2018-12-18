import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderMiddle from "./components/header-middle";
import HeaderButton from "./components/header-button";

const ModalHeader = ({
  title,
  progress,
  leftIcon,
  leftTo,
  leftClick,
  rightIcon,
  rightTo,
  rightClick
}) => (
  <HeaderContainer>
    <HeaderButton icon={leftIcon} to={leftTo} onClick={leftClick} />
    <HeaderMiddle title={title} progress={progress} />
    <HeaderButton icon={rightIcon} to={rightTo} onClick={rightClick} />
  </HeaderContainer>
);

ModalHeader.defaultProps = {
  title: undefined,
  progress: undefined,
  leftIcon: undefined,
  leftTo: undefined,
  leftClick: undefined,
  rightIcon: undefined,
  rightTo: undefined,
  rightClick: undefined
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.shape({
    progress: PropTypes.number,
    total: PropTypes.number
  }),
  leftIcon: PropTypes.string,
  leftTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  leftClick: PropTypes.func,
  rightIcon: PropTypes.string,
  rightTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  rightClick: PropTypes.func
};

export default ModalHeader;
