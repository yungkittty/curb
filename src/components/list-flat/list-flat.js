import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { FlatList } from "react-native-web";
import FlatContainer from "./components/flat-container";
import FlatButtonFloat from "./components/flat-button-float";

// https://github.com/necolas/react-native-web/issues/1238

class ListFlat extends React.Component {
  constructor(props) {
    super(props);
    const { forwardedRef } = props;
    this.listFlat = forwardedRef || React.createRef();
    this.isScrollable = _.throttle(this.isScrollable.bind(this), 10);
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.state = { isScrollableToLeft: false, isScrollableToRight: false };
  }

  componentDidMount() {
    const { horizontal } = this.props;
    if (!horizontal) return;
    window.addEventListener("resize", this.isScrollable);
    this.isScrollable();
  }

  componentDidUpdate(prevProps) {
    const { horizontal, data: itemsData } = this.props;
    const { data: prevItemsData } = prevProps;
    if (!horizontal || itemsData === prevItemsData) return;
    this.isScrollable();
  }

  componentWillUnmount() {
    const { horizontal } = this.props;
    if (!horizontal) return;
    window.removeEventListener("resize", this.isScrollable);
  }

  // eslint-disable-next-line
  isScrollable() {
    const { getItemLayout, data: itemsData } = this.props;
    const { current: listFlat, listFlatNode = listFlat.getScrollableNode() } = this.listFlat;
    const { scrollLeft, clientWidth } = listFlatNode;
    const itemLength = (getItemLayout(itemsData[0], 0) || []).length;
    const itemsLength = itemsData.length;
    const scrollCurrentIndex = Math.round(scrollLeft / itemLength);
    const scrollCurrentOffset = Math.round(clientWidth / itemLength);
    const isScrollableToLeft = scrollCurrentIndex !== 0;
    const isScrollableToRight = scrollCurrentIndex < itemsLength - scrollCurrentOffset;
    const { isScrollableToLeft: wasScrollableToLeft, isScrollableToRight: wasScrollableToRight } = this.state;
    if (isScrollableToLeft !== wasScrollableToLeft || isScrollableToRight !== wasScrollableToRight)
      this.setState({ isScrollableToLeft, isScrollableToRight });
  }

  scrollToLeft() {
    const { getItemLayout, data: itemsData } = this.props;
    const { current: listFlat, listFlatNode = listFlat.getScrollableNode() } = this.listFlat;
    const { scrollLeft, clientWidth } = listFlatNode;
    const itemLength = getItemLayout(itemsData[0], 0).length;
    const scrollCurrentIndex = Math.round(scrollLeft / itemLength);
    const scrollCurrentOffset = Math.round(clientWidth / itemLength);
    const scrollIndex = Math.max(scrollCurrentIndex - scrollCurrentOffset, 0);
    listFlat.scrollToIndex({ index: scrollIndex });
  }

  scrollToRight() {
    const { getItemLayout, data: itemsData } = this.props;
    const { current: listFlat, listFlatNode = listFlat.getScrollableNode() } = this.listFlat;
    const { scrollLeft, clientWidth } = listFlatNode;
    const itemLength = getItemLayout(itemsData[0], 0).length;
    const itemsLength = itemsData.length;
    const scrollCurrentIndex = Math.round(scrollLeft / itemLength);
    const scrollCurrentOffset = Math.round(clientWidth / itemLength);
    const scrollIndex = scrollCurrentIndex + scrollCurrentOffset;
    if (scrollIndex < itemsLength) {
      listFlat.scrollToIndex({ index: scrollIndex });
    } else {
      listFlat.scrollToEnd();
    }
  }

  onScroll(event) {
    // eslint-disable-next-line
    const { onScroll, horizontal } = this.props;
    if (onScroll) onScroll(event);
    if (horizontal) this.isScrollable(event);
  }

  render() {
    const {
      // eslint-disable-line
      className,
      style,
      contentContainerClassName,
      contentContainerStyle,
      horizontal,
      isManuallyScrollable,
      ...others
    } = this.props;
    const {
      // eslint-disable-line
      isScrollableToLeft,
      isScrollableToRight
    } = this.state;
    return (
      <FlatContainer
        // eslint-disable-line
        className={className}
        style={style}
        horizontal={horizontal}
      >
        {horizontal && isScrollableToLeft && isManuallyScrollable ? (
          <FlatButtonFloat
            // eslint-disable-line
            icon="angle-left"
            onClick={this.scrollToLeft}
            style={{ top: 30, left: 20 }}
          />
        ) : null}
        <FlatList
          // eslint-disable-line
          {...others}
          ref={this.listFlat}
          className={contentContainerClassName}
          style={contentContainerStyle}
          onScroll={this.onScroll}
          horizontal={horizontal}
        />
        {horizontal && isScrollableToRight && isManuallyScrollable ? (
          <FlatButtonFloat
            // eslint-disable-line
            icon="angle-right"
            onClick={this.scrollToRight}
            style={{ top: 30, right: 20 }}
          />
        ) : null}
      </FlatContainer>
    );
  }
}

ListFlat.defaultProps = {
  forwardedRef: undefined,
  className: undefined,
  style: undefined,
  contentContainerClassName: undefined,
  contentContainerStyle: undefined,
  horizontal: false,
  isManuallyScrollable: true
};

ListFlat.propTypes = {
  forwardedRef: PropTypes.object, // eslint-disable-line
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerClassName: PropTypes.string,
  contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  horizontal: PropTypes.bool,
  isManuallyScrollable: PropTypes.bool,
  data: PropTypes.array.isRequired, // eslint-disable-line
  getItemLayout: PropTypes.func.isRequired
};

export default React.forwardRef(
  // eslint-disable-line
  (props, forwardedRef) => (
    <ListFlat
      // eslint-disable-line
      {...props}
      forwardedRef={forwardedRef}
    />
  )
);
