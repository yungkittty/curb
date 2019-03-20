import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ContainerScroll from "../container-scroll";

class ListFlat extends React.Component {
  constructor(props) {
    super(props);
    this.containerScroll = React.createRef();
    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  scrollToIndex({ animated = true, index: itemIndex, viewOffset = 0 }) {
    const { getItemLayout, data: itemsData, horizontal } = this.props;
    const scrollToOffset = getItemLayout(itemsData[itemIndex], itemIndex).offset + viewOffset;
    this.containerScroll.current.scrollTo({
      left: +horizontal && scrollToOffset,
      top: !+horizontal && scrollToOffset,
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
    return (
      <ContainerScroll
        ref={this.containerScroll}
        className={className}
        style={style}
        contentContainerStyle={contentContainerStyle}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        horizontal={horizontal}
      >
        {ListHeaderComponent && <ListHeaderComponent />}
        {_.map(itemsData, this.renderItem)}
        {ListFooterComponent && <ListFooterComponent />}
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
  // eslint-disable-next-line
  data: PropTypes.array.isRequired,
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  getItemLayout: PropTypes.func
};

export default ListFlat;
