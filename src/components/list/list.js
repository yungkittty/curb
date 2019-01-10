import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ListOverlay from "./components/list-overlay";
import ListContainer from "./components/list-container";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.listContainer = React.createRef();
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
    } = this.listContainer;
    const deltaHeight = current.offsetHeight - current.clientHeight;
    if (deltaHeight < 0) return;
    style.height = `calc(100% + ${deltaHeight}px)`;
    style.paddingBottom = `${deltaHeight}px`;
  }

  hideVerticalScroll() {
    const {
      current,
      current: { style }
    } = this.listContainer;
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
    return React.cloneElement(renderItem({ item: itemData }), itemProps);
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
          ref={this.listContainer}
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
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // eslint-disable-next-line
  data: PropTypes.array.isRequired,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
  contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  horizontal: PropTypes.bool
};

export default List;
