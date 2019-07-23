import React from "react";
import PropTypes from "prop-types";
import DiscoveryList from "./discovery-list";
import { platformBools } from "../../../../configurations/platform";
import { windowDimensions } from "../../../../configurations/window";

class DiscoveryListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
  }

  componentDidMount() {
    const { getGroupsId } = this.props;
    getGroupsId({
      page: this.getPage(),
      count: this.getCount()
    });
  }

  getPage() {
    // eslint-disable-next-line
    return this.page++;
  }

  // eslint-disable-next-line
  getCountMax() {
    const windowWidth = windowDimensions.getWidth();
    const windowWidthOffset = platformBools.isWeb ? 70 : 0;
    const listWidth = windowWidth - windowWidthOffset;
    const itemWidth = platformBools.isWeb ? 140 : 90;
    return Math.round(listWidth / itemWidth);
  }

  getCount() {
    return Math.round(this.getCountMax() * 1.5);
  }

  render() {
    const { groupsId, getGroupsId } = this.props;
    return (
      <DiscoveryList
        {...this.props}
        onEndReachedThreshold={0.2}
        onEndReached={() => {
          if (groupsId.length < this.getCountMax())
            // eslint-disable-line
            return;
          getGroupsId({
            page: this.getPage(),
            count: this.getCount()
          });
        }}
      />
    );
  }
}

DiscoveryListContainer.propTypes = {
  groupsId: PropTypes.array.isRequired, // eslint-disable-line
  getGroupsId: PropTypes.func.isRequired
};

export default DiscoveryListContainer;
