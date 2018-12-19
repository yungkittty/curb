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

  renderItem({ data: itemData, ...sectionData }, itemIndex) {
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

  renderSection(sectionData, sectionIndex) {
    const { renderSectionHeader, renderSectionFooter } = this.props;
    return (
      <React.Fragment>
        {renderSectionHeader &&
          this.renderSectionLayout(
            renderSectionHeader,
            sectionData,
            `${sectionIndex}:header`
          )}
        {_.map(sectionData, this.renderItem)}
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
        {SectionHeader && <SectionHeader />}
        {_.map(sections, this.renderSection)}
        {SectionFooter && <SectionFooter />}
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
  ListHeaderComponent: undefined,
  ListFooterComponent: undefined,
  keyExtractor: () => undefined,
  renderSectionHeader: undefined,
  renderSectionFooter: undefined
};

ListSection.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
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
