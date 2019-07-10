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

  renderItem({ renderItem: renderItemBis, ...sectionData }, itemData, itemIndex) {
    const { keyExtractor, renderItem } = this.props;
    const itemRender = renderItemBis || renderItem;
    const itemParams = { item: itemData, index: itemIndex, section: sectionData };
    const itemProps = { key: keyExtractor ? keyExtractor(itemData, itemIndex) : itemData.key };
    return React.cloneElement(itemRender(itemParams), itemProps);
  }

  // eslint-disable-next-line
  renderSectionLayout(renderSectionLayout, { data, ...sectionData }, sectionIndex) {
    const sectionLayoutParams = { section: sectionData };
    const sectionLayoutProps = { key: sectionIndex };
    return React.cloneElement(renderSectionLayout(sectionLayoutParams), sectionLayoutProps);
  }

  renderSection({ data: itemData, ...sectionData }, sectionIndex) {
    const { renderSectionHeader, renderSectionFooter } = this.props;
    return (
      <React.Fragment key={`${sectionIndex}:section`}>
        {renderSectionHeader &&
          this.renderSectionLayout(
            // eslint-disable-line
            renderSectionHeader,
            sectionData,
            `${sectionIndex}:section:header`
          )}
        {_.map(itemData, this.renderItem.bind(undefined, sectionData))}
        {renderSectionFooter &&
          this.renderSectionLayout(
            // eslint-disable-line
            renderSectionFooter,
            sectionData,
            `${sectionIndex}:section:footer`
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
  renderSectionFooter: null,
  renderItem: null
};

ListSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  horizontal: PropTypes.bool,
  sections: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.array.isRequired })).isRequired, // eslint-disable-line
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
  keyExtractor: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  renderSectionFooter: PropTypes.func,
  renderItem: PropTypes.func
};

export default ListSection;
