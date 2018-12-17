import _ from "lodash";
import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import ListOverlay from "./components/list-overlay";
import ListContainer from "./components/list-container";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.hideScroll();
  }

  componentDidUpdate() {
    this.hideScroll();
  }

  hideHorizontalScroll() {
    const {
      current,
      current: { style }
    } = this.innerRef;
    const deltaHeight = current.offsetHeight - current.clientHeight;
    if (deltaHeight < 0) return;
    style.height = `calc(100% + ${deltaHeight}px)`;
    style.paddingBottom = `${deltaHeight}px`;
  }

  hideVerticalScroll() {
    const {
      current,
      current: { style }
    } = this.innerRef;
    const deltaWidth = current.offsetWidth - current.clientWidth;
    if (deltaWidth < 0) return;
    style.width = `calc(100% + ${deltaWidth}px)`;
    style.paddingRight = `${deltaWidth}px`;
  }

  hideScroll() {
    const {
      showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator
    } = this.props;
    if (!showsHorizontalScrollIndicator) this.hideHorizontalScroll();
    if (!showsVerticalScrollIndicator) this.hideVerticalScroll();
  }

  renderItem(itemData, index) {
    const { renderItem, keyExtractor } = this.props;
    const itemProps = { key: itemData.key || keyExtractor(itemData, index) || index };
    return cloneElement(renderItem({ item: itemData }), itemProps);
  }

  render() {
    const {
      className,
      style,
      data,
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
          innerRef={this.innerRef}
          style={contentContainerStyle}
          showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
          horizontal={horizontal}
        >
          <ListHeader />
          {_.map(data, this.renderItem)}
          <ListFooter />
        </ListContainer>
      </ListOverlay>
    );
  }
}

List.defaultProps = {
  className: undefined,
  style: undefined,
  keyExtractor: () => null,
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
  // eslint-disable-next-line
  data: PropTypes.array.isRequired,
  keyExtractor: PropTypes.func,
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
