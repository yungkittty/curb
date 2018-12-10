import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import ListOverlay from "./components/list-overlay";
import ListContainer from "./components/list-container";

class List extends Component {
  constructor(props) {
    super(props);
    this.listContainerRef = React.createRef();
  }

  componentDidMount() {
    const {
      contentContainerStyle,
      showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator
    } = this.props;

    // ...

    const {
      offsetHeight,
      offsetWidth,
      clientHeight,
      clientWidth,
      style
    } = this.listContainerRef.current;

    // ...

    const deltaHeight = offsetHeight - clientHeight;
    if (!showsHorizontalScrollIndicator && deltaHeight > 0) {
      style.height = `calc(100% + ${style.paddingBottom ||
        "0px"} + ${deltaHeight}px)`;
      style.paddingBottom = `calc(${style.paddingBottom ||
        "0px"} + ${contentContainerStyle.paddingBottom ||
        "0px"} + ${deltaHeight}px)`;
    }

    // ...

    const deltaWidth = offsetWidth - clientWidth;
    if (!showsVerticalScrollIndicator && deltaWidth > 0) {
      style.width = `calc(100% + ${style.paddingRight ||
        "0px"} + ${deltaWidth}px)`;
      style.paddingRight = `calc(${style.paddingRight ||
        "0px"} + ${contentContainerStyle.paddingRight ||
        "0px"} + ${deltaWidth}px)`;
    }
  }

  render() {
    const {
      className,
      style,
      data,
      renderItem,
      ListHeaderComponent: ListHeader,
      ListFooterComponent: ListFooter,
      contentContainerStyle,
      showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator,
      horizontal
    } = this.props;
    return (
      <ListOverlay
        className={className}
        style={style}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        horizontal={horizontal}
      >
        <ListContainer
          innerRef={this.listContainerRef}
          style={contentContainerStyle}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          horizontal={horizontal}
        >
          <ListHeader />
          {_.map(data, renderItem)}
          <ListFooter />
        </ListContainer>
      </ListOverlay>
    );
  }
}

List.defaultProps = {
  className: undefined,
  style: undefined,
  ListHeaderComponent: () => null,
  ListFooterComponent: () => null,
  contentContainerStyle: undefined,
  showsHorizontalScrollIndicator: true,
  showsVerticalScrollIndicator: true,
  horizontal: false
};

List.propTypes = {
  className: PropTypes.string,
  // eslint-disable-next-line
  style: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
  // eslint-disable-next-line
  contentContainerStyle: PropTypes.object,
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  horizontal: PropTypes.bool
};

export default List;
