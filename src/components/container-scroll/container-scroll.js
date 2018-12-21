<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import ScrollContainer from "./components/scroll-container";
import ScrollContainerContent from "./components/scroll-container-content";

const ContainerScroll = ({
  className,
  style,
  children,
  contentContainerStyle,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  horizontal
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
=======
import styled from "styled-components";
import Container from "../container";

const ContainerScroll = styled(Container)`
  overflow-y: auto;
`;
>>>>>>> c6916fa5c8ecb1c8cf35fe4fc568e1793fe12c66

export default ContainerScroll;
