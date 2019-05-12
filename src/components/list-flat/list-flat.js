import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ContainerScroll from "../container-scroll";
import FlatButtonFloat from "./components/flat-button-float";

class ListFlat extends React.Component {
  constructor(props) {
    super(props);
    this.containerScroll = React.createRef();
    this.isScrollable = this.isScrollable.bind(this);
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.scrollToOffset = this.scrollToOffset.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = { isScrollableToLeft: false, isScrollableToRight: false };
  }

  componentDidMount() {
    const { current: containerScroll } = this.containerScroll;
    window.addEventListener("resize", this.isScrollable);
    containerScroll.addEventListener("scroll", this.isScrollable);
    this.isScrollable();
  }

  componentDidUpdate(prevProps) {
    const { data: itemsData } = this.props;
    const { data: prevItemsData } = prevProps;
    if (itemsData === prevItemsData) return;
    this.isScrollable();
  }

  componentWillUnmount() {
    const { current: containerScroll } = this.containerScroll;
    window.removeEventListener("resize", this.isScrollable);
    containerScroll.removeEventListener("scroll", this.isScrollable);
  }

  isScrollable() {
    const { scrollLeft, scrollWidth, clientWidth } = this.containerScroll.current;
    const isScrollableToLeft = scrollLeft !== 0;
    const isScrollableToRight = scrollWidth - scrollLeft > clientWidth;
    this.setState({ isScrollableToLeft, isScrollableToRight });
  }

  scrollToLeft() {
    const { getItemLayout, data: itemsData } = this.props;
    const { scrollLeft, clientWidth } = this.containerScroll.current;
    const itemLength = getItemLayout(itemsData[0], 0).length; // eslint-disable-line
    const scrollCurrentIndex = Math.floor(scrollLeft / itemLength);
    const scrollCurrentOffset = Math.floor(clientWidth / itemLength);
    const scrollIndex = scrollCurrentIndex - scrollCurrentOffset;
    this.scrollToIndex({ index: Math.max(scrollIndex, 0) });
  }

  scrollToRight() {
    const { getItemLayout, data: itemsData } = this.props;
    const { scrollLeft, clientWidth } = this.containerScroll.current;
    const itemLength = getItemLayout(itemsData[0], 0).length; // eslint-disable-line
    const scrollCurrentIndex = Math.floor(scrollLeft / itemLength);
    const scrollCurrentOffset = Math.floor(clientWidth / itemLength);
    const scrollIndex = scrollCurrentIndex + scrollCurrentOffset;
    this.scrollToIndex({ index: Math.min(scrollIndex, itemsData.length - scrollCurrentOffset) });
  }

  scrollToIndex({ animated = true, index: itemIndex, viewOffset = 0 }) {
    const { getItemLayout, data: itemsData } = this.props;
    const scrollOffset = getItemLayout(itemsData[itemIndex], itemIndex).offset + viewOffset;
    this.scrollToOffset({ animated, offset: scrollOffset });
  }

  scrollToOffset({ animated = true, offset }) {
    const { horizontal } = this.props;
    this.containerScroll.current.scrollTo({
      left: +horizontal && offset,
      top: !+horizontal && offset,
      behavior: animated ? "smooth" : "auto"
    });
  }

  renderItem(itemData, itemIndex) {
    const { keyExtractor, renderItem } = this.props;
    const itemParams = { item: itemData, index: itemIndex };
    const itemProps = { key: keyExtractor ? keyExtractor(itemData, itemIndex) : itemData.key };
    return React.cloneElement(renderItem(itemParams), itemProps);
  }

  render() {
    const {
      className,
      style,
      contentContainerStyle,
      showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator,
      horizontal,
      data: itemsData,
      ListHeaderComponent,
      ListFooterComponent
    } = this.props;
    const { isScrollableToLeft, isScrollableToRight } = this.state;
    return (
      <ContainerScroll
        className={className}
        style={{ ...style, position: "relative" }}
        ref={this.containerScroll}
        contentContainerStyle={contentContainerStyle}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        horizontal={horizontal}
      >
        {horizontal && isScrollableToLeft ? (
          <FlatButtonFloat
            // eslint-disable-line
            icon="angle-left"
            onClick={this.scrollToLeft}
            style={{ top: 30, left: 20 }}
          />
        ) : null}
        {ListHeaderComponent && <ListHeaderComponent />}
        {_.map(itemsData, this.renderItem)}
        {ListFooterComponent && <ListFooterComponent />}
        {horizontal && isScrollableToRight ? (
          <FlatButtonFloat
            // eslint-disable-line
            icon="angle-right"
            onClick={this.scrollToRight}
            style={{ top: 30, right: 20 }}
          />
        ) : null}
      </ContainerScroll>
    );
  }
}

ListFlat.defaultProps = {
  className: undefined,
  style: undefined,
  contentContainerStyle: undefined,
  showsHorizontalScrollIndicator: true,
  showsVerticalScrollIndicator: true,
  horizontal: false,
  ListHeaderComponent: null,
  ListFooterComponent: null,
  keyExtractor: () => undefined,
  getItemLayout: () => undefined
};

ListFlat.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  horizontal: PropTypes.bool,
  data: PropTypes.array.isRequired, // eslint-disable-line
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  getItemLayout: PropTypes.func
};

export default ListFlat;
