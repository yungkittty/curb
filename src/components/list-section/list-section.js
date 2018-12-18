import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import ContainerScroll from "../container-scroll";

/* eslint-disable */

class ListSection extends React.Component {
  renderItem({ data: itemData, ...sectionData }, itemIndex) {
    const { keyExtractor, renderItem } = this.props;
    const itemParams = {
      item: itemData,
      index: itemIndex,
      section: sectionData
    };
    const itemProps = {
      key: itemData.key || keyExtractor(itemData, itemIndex) || itemIndex
    };
    return React.cloneElement(renderItem(itemParams), itemProps);
  }

  renderSection_(
    { data, ...sectionData },
    sectionIndex,
    sectionIndexSuffix,
    renderSection_
  ) {
    const sectionParams = { section: sectionData };
    const sectionProps = { key: `${sectionIndex}${sectionIndexSuffix}` };
    return React.cloneElement(renderSection_(sectionParams), sectionProps);
  }

  renderSection(sectionData, sectionIndex) {
    const { renderSectionHeader, renderSectionFooter } = this.props;
    return [
      this.renderSection_(
        sectionData,
        sectionIndex,
        ":header",
        renderSectionHeader
      ),
      ..._.map(sectionData, this.renderItem),
      this.renderSection_(
        sectionData,
        sectionIndex,
        ":footer",
        renderSectionFooter
      )
    ];
  }

  render() {
    const {
      className,
      style,
      contentContainerStyle,
      showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator,
      horizontal,
      sections,
      ListHeaderComponent: SectionHeader,
      ListFooterComponent: SectionFooter
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
        <SectionHeader />
        {_.map(sections, this.renderSection)}
        <SectionFooter />
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
  ListHeaderComponent: React.Fragment,
  ListFooterComponent: React.Fragment,
  keyExtractor: () => undefined,
  renderSectionHeader: React.Fragment,
  renderSectionFooter: React.Fragment
};

ListSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]), // !
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  horizontal: PropTypes.bool,
  // eslint-disable-next-line
  sections: PropTypes.array.isRequired,
  ListHeaderComponent: PropTypes.func,
  ListFooterComponent: PropTypes.func,
  keyExtractor: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  renderSectionFooter: PropTypes.func,
  renderItem: PropTypes.func.isRequired
};

export default ListSection;
