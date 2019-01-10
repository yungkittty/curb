import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ContainerScroll from "../container-scroll";

class ListSection extends React.Component {
  constructor(props) {
    super(props);
    this.renderSection = this.renderSection.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(sectionData, itemData, itemIndex) {
    const { keyExtractor, renderItem } = this.props;
    const itemParams = { item: itemData, index: itemIndex, section: sectionData };
    const itemProps = { key: itemData.key || keyExtractor(itemData, itemIndex) || itemIndex };
    return React.cloneElement(renderItem(itemParams), itemProps);
  }

  // eslint-disable-next-line
  renderSectionLayout(
    renderSectionLayout,
    { data, ...sectionData },
    sectionIndex
  ) {
    const sectionLayoutParams = { section: sectionData };
    const sectionLayoutProps = { key: sectionIndex };
    return React.cloneElement(
      renderSectionLayout(sectionLayoutParams),
      sectionLayoutProps
    );
  }

  renderSection({ data: itemData, ...sectionData }, sectionIndex) {
    const { renderSectionHeader, renderSectionFooter } = this.props;
    return (
      <React.Fragment>
        {renderSectionHeader &&
          this.renderSectionLayout(
            renderSectionHeader,
            sectionData,
            `${sectionIndex}:header`
          )}
        {_.map(itemData, this.renderItem.bind(undefined, sectionData))}
        {renderSectionFooter &&
          this.renderSectionLayout(
            renderSectionFooter,
            sectionData,
            `${sectionIndex}:footer`
          )}
      </React.Fragment>
    );
  }

  render() {
    const {
      className,
      style,
      contentContainerStyle,
      showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator,
      horizontal,
      sections: sectionsData,
      ListHeaderComponent,
      ListFooterComponent
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
        {ListHeaderComponent && <ListHeaderComponent />}
        {_.map(sectionsData, this.renderSection)}
        {ListFooterComponent && <ListFooterComponent />}
      </ContainerScroll>
    );
  }
}

ListSection.defaultProps = {
  className: undefined,
  style: undefined,
  contentContainerStyle: undefined,
  showsHorizontalScrollIndicator: true,
  showsVerticalScrollIndicator: true,
  horizontal: false,
  ListHeaderComponent: null,
  ListFooterComponent: null,
  keyExtractor: () => undefined,
  renderSectionHeader: null,
  renderSectionFooter: null
};

ListSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  horizontal: PropTypes.bool,
  // eslint-disable-next-line
  sections: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.array.isRequired })).isRequired,
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
  keyExtractor: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  renderSectionFooter: PropTypes.func,
  renderItem: PropTypes.func.isRequired
};

export default ListSection;
