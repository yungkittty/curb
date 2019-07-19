import React from "react";
import PropTypes from "prop-types";
import ListCircleText from "../../../../components/list-circle-text";
import { windowDimensions } from "../../../../configurations/window";

class DiscoveryList extends React.Component {
  constructor(props) {
    super(props);
    this.page = 0;
  }

  componentDidMount() {
    const { getDiscoveryGroups } = this.props;
    getDiscoveryGroups({
      // eslint-disable-next-line
      page: ++this.page,
      count: this.getCount()
    });
  }

  // eslint-disable-next-line
  getCount() {
    return Math.round(((windowDimensions.getWidth() - 70) / 140) * 1.5);
  }

  render() {
    const { getDiscoveryGroups } = this.props;
    return (
      <ListCircleText
        // eslint-disable-line
        {...this.props}
        contentContainerStyle={{ paddingLeft: 40 }}
        onEndReachedThreshold={0.01}
        onEndReached={() => {
          getDiscoveryGroups({
            // eslint-disable-next-line
            page: ++this.page,
            count: this.getCount()
          });
        }}
      />
    );
  }
}

DiscoveryList.propTypes = { getDiscoveryGroups: PropTypes.func.isRequired };

export default DiscoveryList;
