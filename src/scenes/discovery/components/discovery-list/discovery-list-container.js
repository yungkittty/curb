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

  // eslint-disable-next-line
  getPage() {
    // eslint-disable-next-line
    return this.page++;
  }

  // eslint-disable-next-line
  getCount() {
    const listOffsetWidth = platformBools.isWeb ? 70 : 0;
    const listWidth = windowDimensions.getWidth() - listOffsetWidth;
    const itemWidth = platformBools.isWeb ? 140 : 90;
    return Math.round((listWidth / itemWidth) * 1.5);
  }

  render() {
    const { getGroupsId } = this.props;
    return (
      <DiscoveryList
        // eslint-disable-line
        {...this.props}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
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
  getGroupsId: PropTypes.func.isRequired
};

export default DiscoveryListContainer;
