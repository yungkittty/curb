import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ScrollContainer from "./components/scroll-container";
import ScrollContainerContent from "./components/scroll-container-content";

class ContainerScroll extends React.Component {
  constructor(props) {
    super(props);
    this.isScrollable = this.isScrollable.bind(this);
    this.scrollContentContainerId = `scroll-content-container-${_.uniqueId()}`;
    this.state = { isScrollableToHorizontal: false, isScrollableToVertical: false };
  }

  componentDidMount() {
    window.addEventListener("resize", this.isScrollable);
    this.isScrollable();
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    if (children === prevProps.children) return;
    this.isScrollable();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.isScrollable);
  }

  isScrollable() {
    const scrollContentContainer = document.getElementById(this.scrollContentContainerId);
    const { scrollWidth, scrollHeight, clientWidth, clientHeight } = scrollContentContainer;
    const isScrollableToHorizontal = scrollWidth !== clientWidth;
    const isScrollableToVertical = scrollHeight !== clientHeight;
    this.setState({ isScrollableToHorizontal, isScrollableToVertical });
  }

  render() {
    const {
      className,
      style,
      children,
      forwardedRef,
      contentContainerStyle,
      showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator,
      horizontal
    } = this.props;
    const {
      // eslint-disable-line
      isScrollableToHorizontal,
      isScrollableToVertical
    } = this.state;
    return (
      <ScrollContainer className={className} style={style} horizontal={horizontal}>
        <ScrollContainerContent
          id={this.scrollContentContainerId}
          ref={forwardedRef}
          style={contentContainerStyle}
          showsHorizontalScrollIndicator={!isScrollableToHorizontal || showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={!isScrollableToVertical || showsVerticalScrollIndicator}
          horizontal={horizontal}
        >
          {children}
        </ScrollContainerContent>
      </ScrollContainer>
    );
  }
}

ContainerScroll.defaultProps = {
  className: undefined,
  style: undefined,
  forwardedRef: undefined,
  contentContainerStyle: undefined,
  showsHorizontalScrollIndicator: true,
  showsVerticalScrollIndicator: true,
  horizontal: false
};

ContainerScroll.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node.isRequired,
  forwardedRef: PropTypes.object, // eslint-disable-line
  contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  horizontal: PropTypes.bool
};

// eslint-disable-next-line
export default React.forwardRef((props, forwardedRef) => (
  <ContainerScroll {...props} forwardedRef={forwardedRef} />
));
