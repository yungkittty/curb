/* eslint-disable */

import React from "react";
import ListContainer from "./components/list-container";
import ListButtonIcon from "./components/list-button-icon";
import ListFlat from "../../../../components/list-flat";

class DiscoveryList extends React.Component {
  constructor(props) {
    super(props);
    this.listFlat = React.createRef();
    this.scrollToLeft = this.scrollToLeft.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
  }

  scrollToLeft() {}

  scrollToRight() {}

  render() {
    return (
      <ListContainer>
        <ListButtonIcon
          icon="angle-left"
          style={{ left: 120 }}
          onClick={this.scrollToLeft}
        />
        <ListFlat
          {...this.props}
          ref={this.listFlat}
          style={{ height: 100 }}
          contentContainerStyle={{ paddingLeft: 40 }}
          getItemLayout={(itemData, itemIndex) => ({ offset: 100 * itemIndex })}
        />
        <ListButtonIcon
          icon="angle-right"
          style={{ right: 40 }}
          onClick={this.scrollToRight}
        />
      </ListContainer>
    );
  }
}

export default DiscoveryList;
