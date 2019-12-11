import React from "react";
import PropTypes from "prop-types";
import DiscoveryList from "./discovery-list";
import { platformBools } from "../../../../configurations/platform";
import { windowDimensions } from "../../../../configurations/window";

class DiscoveryListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.discoveryListpage = 1;
  }

  componentDidMount() {
    const { getDiscoverySectionGroupsId } = this.props;
    getDiscoverySectionGroupsId({
      page: this.getPage(),
      count: this.getCount()
    });
  }

  getPage() {
    // eslint-disable-next-line
    return this.discoveryListpage++;
  }

  // eslint-disable-next-line
  getCountMax() {
    const windowWidth = windowDimensions.getWidth();
    const windowWidthOffset = platformBools.isWeb ? 70 : 0;
    const discoveryListWidth = windowWidth - windowWidthOffset;
    const discoveryListItemWidth = platformBools.isWeb ? 460 + 60 : windowDimensions.getWidth() - 90 + 8;
    return Math.round(discoveryListWidth / discoveryListItemWidth);
  }

  // eslint-disable-next-line
  getCount() {
    return Math.round(this.getCountMax() * 1.5);
  }

  render() {
    const {
      // eslint-disable-line
      isDiscoverySectionEnd,
      discoverySectionGroupsId,
      getDiscoverySectionGroupsId,
      ...others
    } = this.props;
    return (
      <DiscoveryList
        {...others}
        groupsId={discoverySectionGroupsId}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          if (isDiscoverySectionEnd || discoverySectionGroupsId.length < this.getCountMax())
            // eslint-disable-line
            return;
          getDiscoverySectionGroupsId({
            page: this.getPage(),
            count: this.getCount()
          });
        }}
      />
    );
  }
}

DiscoveryListContainer.propTypes = {
  isDiscoverySectionEnd: PropTypes.bool.isRequired,
  discoverySectionGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  getDiscoverySectionGroupsId: PropTypes.func.isRequired
};

export default DiscoveryListContainer;
