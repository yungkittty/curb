import React from "react";
import PropTypes from "prop-types";
import ScrollContainer from "./components/scroll-container";
import ScrollContainerContent from "./components/scroll-container-content";

const ContainerScroll = ({
  className,
  style,
  children,
  contentContainerStyle,
  horizontal,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator
}) => (
  <ScrollContainer
    className={className}
    style={style}
    horizontal={horizontal}
  >
    <ScrollContainerContent
      style={contentContainerStyle}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      horizontal={horizontal}
    >
      {children}
    </ScrollContainerContent>
  </ScrollContainer>
);

ContainerScroll.defaultProps = {
  className: undefined,
  style: undefined,
  contentContainerStyle: undefined,
  showsHorizontalScrollIndicator: true,
  showsVerticalScrollIndicator: true,
  horizontal: false
};

ContainerScroll.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  horizontal: PropTypes.bool
};

export default ContainerScroll;
