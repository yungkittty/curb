import React from "react";
import PropTypes from "prop-types";
import ListCircleText from "../../../../components/list-circle-text";

class DiscoveryList extends React.Component {
  constructor(props) {
    super(props);
    this.page = 0;
  }

  componentDidMount() {
    const { getDiscoveryGroups } = this.props;
    // eslint-disable-next-line
    getDiscoveryGroups({ page: ++this.page, count: 10 });
  }

  render() {
    return (
      <ListCircleText
        // eslint-disable-line
        {...this.props}
        contentContainerStyle={{ paddingLeft: 40 }}
        // eslint-disable-next-line
        onEndReached={() => getDiscoveryGroups({ page: ++this.page, count: 10 })}
        onEndReachedThreshold={0.8}
      />
    );
  }
}

DiscoveryList.propTypes = { getDiscoveryGroups: PropTypes.func.isRequired };

export default DiscoveryList;
