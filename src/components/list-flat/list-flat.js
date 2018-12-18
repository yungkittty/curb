import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ContainerScroll from "../container-scroll";

class ListFlat extends React.Component {
  renderItem(itemData, itemIndex) {
    const { keyExtractor, renderItem } = this.props;
    const itemParams = { item: itemData, index: itemIndex };
    const itemProps = { key: itemData.key || keyExtractor(itemData, itemIndex) || itemIndex };
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
      data,
      ListHeaderComponent: FlatHeader,
      ListFooterComponent: FlatFooter
    } = this.props;
    return (
      <ContainerScroll
        className={className}
        style={style}
        contentContainerStyle={contentContainerStyle}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        horizontal={horizontal}
      >
        <FlatHeader />
        {_.map(data, this.renderItem)}
        <FlatFooter />
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
  ListHeaderComponent: React.Fragment,
  ListFooterComponent: React.Fragment,
  keyExtractor: () => undefined
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
  renderItem: PropTypes.func.isRequired
};

export default ListFlat;
